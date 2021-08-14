import { Link } from "react-router-dom";
import { addToBasket } from "../../services/baskets";

const DishDetails = ({ user, basket, setBasket, dish }) => {
  const handleAdd = async () => {
    const res = await addToBasket(basket.id, dish.id);
    setBasket(res);
  };

  const inStock = <button onClick={handleAdd}>Add to Cart</button>;
  const outOfStock = <button id="out-of-stock">Out of Stock</button>;

  const handleInventory = () => {
    if (!dish.inventory) {
      return outOfStock;
    } else {
      return inStock;
    }
  };
  // TODO 1 render image
  return (
    <div className="dish-details">
      <div className="details-left">
        <img src={dish.img_url} alt={dish.name} />
      </div>
      <div className="details-right">
        <h4>{dish.name.toUpperCase()}</h4>
        <p>{dish.description}</p>
        <h5>${dish.price}</h5>
        {user ? (
          <Link to={`/edit-dish/${dish.id}`}>Edit</Link>
        ) : (
          handleInventory()
        )}
      </div>
    </div>
  );
};

export default DishDetails;
