import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../services/lineItems';

const DishDetails = ({user, dish}) => {

  const handleAdd = async() => {
    const basket = await addToCart(dish.id)
    console.log(basket)
  }

  return (
    <div className="dish-details">
      <h4>{dish.name.toUpperCase()}</h4>
      <p>{dish.description}</p>
      <h5>${dish.price}</h5>
      {user ? (<Link to="/edit-dish">Edit</Link>) : (<button onClick={handleAdd}>Add to Cart</button>)}
    </div>
  );
};

export default DishDetails;