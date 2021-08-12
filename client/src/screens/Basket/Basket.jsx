import React from "react";
import { Link } from "react-router-dom";

const Basket = () => {
  return (
    <div>
      <Link to="/shop">
        <div className="go-back">Back to Shop</div>
      </Link>
    </div>
  );
};

export default Basket;
