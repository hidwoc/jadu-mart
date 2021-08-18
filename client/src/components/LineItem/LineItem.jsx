import { useEffect, useState } from "react";
import { updateLineItem, removeFromBasket } from "../../services/lineItems";
import "./LineItem.css";

const LineItem = ({
  lineItem,
  setViewBasket,
  setGrandTotal,
  setToggleFetch,
}) => {
  const [lineItemSubtotal, setLineItemSubtotal] = useState(lineItem?.subtotal);
  const [lineItemQuantity, setLineItemQuantity] = useState(lineItem?.quantity);

  useEffect(() => {
    const update = async () => {
      await updateLineItem(lineItem.id, { quantity: lineItemQuantity });
    };
    update();
  }, [lineItemQuantity]);

  const handleRemove = async () => {
    await removeFromBasket(lineItem.id);
    setToggleFetch((curr) => !curr);
  };

  const handleAdd = () => {
    setLineItemQuantity((prevState) => prevState + 1);
    setLineItemSubtotal((prevState) => prevState + lineItem.dish?.price);
    setGrandTotal((prevState) => prevState + lineItem.dish?.price);
  };

  const handleReduce = () => {
    if (lineItemQuantity >= 1) {
      setLineItemQuantity((prevState) => prevState - 1);
      setLineItemSubtotal((prevState) => prevState - lineItem.dish?.price);
      setGrandTotal((prevState) => prevState - lineItem.dish?.price);
    } else {
      handleRemove();
    }
  };

  return (
    <div className="line-item" id={lineItem.dish.name}>
      <div className="line-item-left">
        <img src={lineItem.dish.img_url} alt={lineItem.dish.name} width="125" />
        <button className="remove" onClick={handleRemove}>
          Remove from Basket
        </button>
      </div>
      <div className="line-item-middle">
        <p className="line-name">{lineItem.dish.name.toUpperCase()}</p>
        <p className="line-price">${lineItem.dish.price}</p>
      </div>
      <div className="line-quantity">
        <button className="add-reduce" onClick={handleReduce}>
          -
        </button>
        <p className="quantity">{lineItemQuantity}</p>
        <button className="add-reduce" onClick={handleAdd}>
          +
        </button>
      </div>
      <p className="line-subtotal">${lineItemSubtotal}</p>
    </div>
  );
};

export default LineItem;
