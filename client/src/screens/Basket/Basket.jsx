import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBasket } from "../../services/baskets";

const Basket = () => {
  const [basket, setBasket] = useState(null)

  useEffect(() => {
    const fetchBasket = async() => {
      const basket = await getBasket()
      console.log(basket)
    }
    fetchBasket()
  },[])
  // console.log(sessionStorage)
  return (
    <div>
      <Link to="/shop">
        <div className="go-back">Back to Shop</div>
      </Link>
    </div>
  );
};

export default Basket;
