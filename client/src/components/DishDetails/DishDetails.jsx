import React from 'react';
import { Link } from 'react-router-dom';

const DishDetails = ({user}) => {
  return (
    <div>
      DISH DETAILS
      {user ? (<Link to="/edit-dish">Edit</Link>) : (<button>Add to Cart</button>)}
    </div>
  );
};

export default DishDetails;