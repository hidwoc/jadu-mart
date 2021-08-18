import { useEffect } from "react";
import { useHistory } from "react-router";
import { updateLineItem } from "../../services/lineItems";
import { placeOrder } from "../../services/baskets";
import "./OrderPlaced.css";

const OrderPlaced = ({ basket, setToggleNewBasket }) => {
  const history = useHistory();

  useEffect(() => {
    const handleOrder = async () => {
      await updateLineItem();
      await placeOrder(basket.id);
      setToggleNewBasket((curr) => !curr);
    };
    handleOrder();
    setTimeout(() => {
      history.push("/home");
    }, 1000);
  }, []);

  return <div className="thank-you">Thank you for your order!</div>;
};

export default OrderPlaced;
