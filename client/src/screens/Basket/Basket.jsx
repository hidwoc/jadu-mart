import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LineItem from "../../components/LineItem/LineItem";
import { getBasket } from "../../services/baskets";
import "./Basket.css";

const Basket = ({ basket }) => {
  const [viewBasket, setViewBasket] = useState(null);
  const [grandTotal, setGrandTotal] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);

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
            <Link to="/thank-you">
              <button id="order">Place Order</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
