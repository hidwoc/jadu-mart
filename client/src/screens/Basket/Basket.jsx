import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getBasket, placeOrder } from "../../services/baskets";
import {
  addQuantity,
  reduceQuantity,
  removeFromBasket,
} from "../../services/lineItems";
import "./Basket.css";

const Basket = ({ basket, setToggleNewBasket }) => {
  // const [viewBasket, setViewBasket] = useState(null);
  const [viewBasket, setViewBasket] = useState({})
  const history = useHistory();

  useEffect(() => {
    const fetchBasket = async () => {
      const res = await getBasket(basket?.id);
      setViewBasket(res);
    };
    fetchBasket();
  }, [basket?.id]);

  const handleNoBasket = <h4 className="basket-message">Loading Basket...</h4>;

  const handleEmptyBasket = <h4 className="basket-message">Basket is Empty!</h4>;

  const handleRemove = async (itemID) => {
    const res = await removeFromBasket(itemID);
    console.log(res);
    setViewBasket((prevState) =>
      prevState.line_items.filter((lineItem) => lineItem.id !== itemID)
    );
    // ? will subsequent views of Basket be outdated?
    // TODO ! not rendering newViewBasket in time
  };

  const handleAdd = (index, curr) => {
    console.log(index, curr)
    const updatedQuantity = curr + 1
    const updatedSubtotal = 100
    // like handleChange - viewBasket.line_itemsfind line_item by id and update quantity;
    // console.log(res);
    console.log(viewBasket)
    console.log({
      ...viewBasket,
      line_items: [
        ...viewBasket.line_items,
        viewBasket.line_items[index]:
        {
          ...viewBasket.line_items[index],
          quantity: updatedQuantity,
          subtotal: updatedSubtotal
        }
      ] 
    })
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
          {viewBasket.line_items?.map((lineItem, index) => (
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
                {/* <input type="text" value={lineItem.quantity}/> */}
                <button
                  className="add-reduce"
                  onClick={() => handleAdd(index, lineItem.quantity)}
                >
                  +
                </button>
              </div>
              <p className="line-subtotal">${lineItem.subtotal}</p>
            </div>
          ))}
          <div className="basket-summary">
            <h2>Grand Total:&nbsp;&nbsp;&nbsp; ${viewBasket?.total}</h2>
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
