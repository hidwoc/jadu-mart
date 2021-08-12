import React from "react";
import { Link } from "react-router-dom"

const EditDish = () => {
  return (
    <div>
      <Link to="/shop">
        <div className="go-back">Return Without Saving</div>
      </Link>
    </div>
  );
};

export default EditDish;
