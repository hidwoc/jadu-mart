import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getBasket, placeOrder } from "../../services/baskets";
import {
  addQuantity,
  reduceQuantity,
  removeFromBasket,
} from "../../services/lineItems";

const Basket = ({ basket, setBasket }) => {
  const [viewBasket, setViewBasket] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const fetchBasket = async () => {
      const res = await getBasket(basket.id);
      setViewBasket(res);
    };
    fetchBasket();
  }, [basket.id]);

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
    const res = await placeOrder(basketID)
    setBasket(null)
    history.push('/shop')
  };

  return (
    <div className="basket-screen">
      <header>
        <h3>Basket</h3>
        <Link to="/shop">
          <div className="go-back">Back to Shop</div>
        </Link>
      </header>
      <div className="basket-column-header">
        <h4>Dish</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Subtotal</h4>
      </div>
      <div className="basket-items">
        {viewBasket?.line_items?.map((lineItem) => (
          <div className="line-item" id={lineItem.dish.name} key={lineItem.id}>
            <img
              src={lineItem.dish.img_url}
              alt={lineItem.dish.name}
              width="100"
            />
            <button onClick={() => handleRemove(lineItem.id)}>
              Remove from Basket
            </button>
            <p className="line-name">{lineItem.dish.name}</p>
            <p className="line-price">${lineItem.dish.price}</p>
            <button onClick={() => handleReduce(lineItem.id)}>-</button>
            <p className="line=quantity">{lineItem.quantity}</p>
            <button onClick={() => handleAdd(lineItem.id)}>+</button>
            {/* TODO: render calculated attribute */}
            <p>{lineItem.subtotal}</p>
          </div>
        ))}
        <div className="basket-summary">
          {/* TODO: render calculated attribute */}
          <h2>Grand Total: ${viewBasket?.total}</h2>
          <button onClick={() => handleOrder(viewBasket.id)}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
