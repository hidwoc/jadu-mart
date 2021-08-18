import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LineItem from "../../components/LineItem/LineItem";
import { getBasket, placeOrder } from "../../services/baskets";
import { updateLineItem } from "../../services/lineItems";
import "./Basket.css";

const Basket = ({ basket, setToggleNewBasket }) => {
  const [viewBasket, setViewBasket] = useState(null);
  const [grandTotal, setGrandTotal] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchBasket = async () => {
      const oneBasket = await getBasket(basket?.id);
      setViewBasket(oneBasket);
      setGrandTotal(oneBasket.total);
    };
    fetchBasket();
  }, [basket?.id, toggleFetch]);

  const handleNoBasket = <h4 className="basket-message">Loading Basket...</h4>;

  const handleEmptyBasket = (
    <h4 className="basket-message">Basket is Empty!</h4>
  );

  const handleOrder = async (basketID) => {
    await updateLineItem();
    await placeOrder(basketID);
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
          {viewBasket.line_items?.map((lineItem) => (
            <LineItem
              key={lineItem.id}
              lineItem={lineItem}
              setViewBasket={setViewBasket}
              setGrandTotal={setGrandTotal}
              setToggleFetch={setToggleFetch}
            />
          ))}
          <div className="basket-summary">
            <h2>Grand Total:&nbsp;&nbsp;&nbsp; ${grandTotal}</h2>
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
