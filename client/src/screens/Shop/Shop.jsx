import React from "react";
import { Link } from "react-router-dom";
import DishDetails from "../../components/DishDetails/DishDetails";

const Shop = ({ user }) => {
  return (
    <div>
      {user ? (
        <Link to="/add-dish">Add New</Link>
      ) : (
        <Link to="/basket">Basket</Link>
      )}
      <div className="dishes-div">
        <DishDetails user={user}/>
      </div>
      SHOP
    </div>
  );
};

export default Shop;
