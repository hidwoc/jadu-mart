import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBasket } from "../../services/baskets";

const Basket = ({ basket }) => {
  const [viewBasket, setViewBasket] = useState(null);

  useEffect(() => {
    const fetchBasket = async () => {
      const res = await getBasket(basket.id);
      setViewBasket(res);
    };
    fetchBasket();
  }, [basket.id]);

  const handleRemove = async() => {
    return null
  }

  const handleReduce = async() => {
    return null
  }

  const handleAdd = async() => {
    return null
  }

  const handleOrder = async() => {
    return null
  }
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
            <img src={lineItem.dish.img_url} alt={lineItem.dish.name} />
          {/* TODO: onClick=remove from cart */}
            <button>Remove From Cart</button>
            <p className="line-name">{lineItem.dish.name}</p>
            <p className="line-price">${lineItem.dish.price}</p>
            {/* TODO: onClick=reduceQuantity */}
            <button>-</button>
            <p className="line=quantity">{lineItem.quantity}</p>
            {/* TODO: onClick=addQuantity */}
            <button>+</button>
            {/* TODO: render calculated attribute */}
            <p>{lineItem.subtotal}</p>
          </div>
        ))}
        <div className="basket-summary">
          {/* TODO: render calculated attribute */}
          <h2>Grand Total: ${viewBasket?.total}</h2>
          {/* TODO: onClick=placeOrder */}
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
