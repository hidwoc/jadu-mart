import React from 'react';
import { Link } from 'react-router-dom';

const DishDetails = () => {
  return (
    <div>
      DISH DETAILS
      <Link to="/edit-dish">Edit</Link>
    </div>
  );
};

export default DishDetails;