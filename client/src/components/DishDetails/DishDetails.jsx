import React from 'react';
import { Link } from 'react-router-dom';

const DishDetails = ({user, dish}) => {
  return (
    <div className="dish-details">
      <h4>{dish.name.toUpperCase()}</h4>
      <p>{dish.description}</p>
      <h5>${dish.price}</h5>
      {user ? (<Link to="/edit-dish">Edit</Link>) : (<button>Add to Cart</button>)}
    </div>
  );
};

export default DishDetails;