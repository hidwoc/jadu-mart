import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getBasket, placeOrder } from "../../services/baskets";
import {
  addQuantity,
  reduceQuantity,
  removeFromBasket,
} from "../../services/lineItems";
import "./Basket.css";

// TODO: if no basket, render "basket empty"
const Basket = ({ basket, setBasket, setToggleNewBasket }) => {
  const [viewBasket, setViewBasket] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchBasket = async () => {
      const res = await getBasket(basket?.id);
      setViewBasket(res);
    };
    fetchBasket();
  }, [basket?.id]);

  const handleNoBasket = <h4>Loading Basket...</h4>;

  const handleEmptyBasket = <h4>Basket is Empty!</h4>;

  const handleRemove = async (itemID) => {
    const res = await removeFromBasket(itemID);
    console.log(res);
    setViewBasket((prevState) =>
      prevState.line_items.filter((lineItem) => lineItem.id !== itemID)
    );
    // ? will subsequent views of Basket be outdated?
    // TODO ! not rendering newViewBasket in time
  };

  const handleAdd = async (itemID) => {
    const res = await addQuantity(itemID);
    console.log(res);
    // setViewBasket(prevState => prevState.line_items.find(lineItem => lineItem.id === itemID) = res)
  };

  const handleReduce = async (itemID) => {
    const res = await reduceQuantity(itemID);
    console.log(res);
  };

  const handleOrder = async (basketID) => {
    const res = await placeOrder(basketID);
    setToggleNewBasket((curr) => !curr);
    history.push("/shop");
  };

  return (
    <div className="basket-screen">
      <header>
        <h3>Basket</h3>
        <div className="header-right">
          <Link to="/shop">
            <img
              className="icon"
              src="/assets/graphics/BackArrow.png"
              alt="back arrow"
            />
            <p className="go-back">Back to Shop</p>
          </Link>
        </div>
      </header>
      <div className="basket-column-header">
        <h4 id="column-dish">Dish</h4>
        <h4 id="column-price">Price</h4>
        <h4 id="column-quantity">Quantity</h4>
        <h4 id="column-subtotal">Subtotal</h4>
      </div>
      {!viewBasket ? (
        handleNoBasket
      ) : viewBasket.line_items?.length < 1 ? (
        handleEmptyBasket
      ) : (
        <div className="basket-items">
          {viewBasket.line_items.map((lineItem) => (
            <div
              className="line-item"
              id={lineItem.dish.name}
              key={lineItem.id}
            >
              <div className="line-item-left">
                <img
                  src={lineItem.dish.img_url}
                  alt={lineItem.dish.name}
                  width="125"
                />
                <button
                  className="remove"
                  onClick={() => handleRemove(lineItem.id)}
                >
                  Remove from Basket
                </button>
              </div>
              <p className="line-name">{lineItem.dish.name.toUpperCase()}</p>
              <p className="line-price">${lineItem.dish.price}</p>
              <div className="line-quantity">
                <button
                  className="add-reduce"
                  onClick={() => handleReduce(lineItem.id)}
                >
                  -
                </button>
                <p className="quantity">{lineItem.quantity}</p>
                <button
                  className="add-reduce"
                  onClick={() => handleAdd(lineItem.id)}
                >
                  +
                </button>
              </div>
              <p className="line-subtotal">${lineItem.subtotal}</p>
            </div>
          ))}
          <div className="basket-summary">
            <h2>Grand Total:&nbsp;&nbsp;&nbsp; ${viewBasket?.total}</h2>
            {console.log("Basket Total", viewBasket?.total)}
            <button id="order" onClick={() => handleOrder(viewBasket.id)}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
