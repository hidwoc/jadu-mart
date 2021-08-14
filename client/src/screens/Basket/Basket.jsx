import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBasket } from "../../services/baskets";

const Basket = ({basket}) => {
  const [viewBasket, setViewBasket] = useState(null)

  useEffect(() => {
    const fetchBasket = async() => {
      const basket = await getBasket()
      console.log(basket)
    }
    fetchBasket()
  },[])
  return (
    <div>
      <div>
        {basket.lineItems?.map(lineItem => (
          <div>
            {console.log(lineItem)}
          </div>

        ))}
      </div>
      <Link to="/shop">
        <div className="go-back">Back to Shop</div>
      </Link>
    </div>
  );
};

export default Basket;
