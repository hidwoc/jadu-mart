import { Link } from "react-router-dom";
import { addToBasket } from "../../services/baskets";
import "./DishDetails.css";

const DishDetails = ({ user, basket, setBasket, dish }) => {
  const handleAdd = async () => {
    const res = await addToBasket(basket.id, dish.id);
    setBasket(res);
  };

  const inStock = <button onClick={handleAdd}>Add to Basket</button>;
  const outOfStock = <button id="out-of-stock">Out of Stock</button>;

  const handleInventory = () => {
    if (dish.inventory <= 0) {
      return outOfStock;
    } else {
      return inStock;
    }
  };

  return (
    <div className="dish-details">
      <div className="details-left">
        <img src={dish.img_url} alt={dish.name} width="350" />
      </div>
      <div className="details-right">
        <h4 className="dish-name">{dish.name.toUpperCase()}</h4>
        <p className="dish-description">{dish.description}</p>
        <p className="dish-price">${dish.price}</p>
        {user ? (
          <Link to={`/edit-dish/${dish.id}`} id="edit">
            Edit
          </Link>
        ) : (
          handleInventory()
        )}
      </div>
    </div>
  );
};

export default DishDetails;
