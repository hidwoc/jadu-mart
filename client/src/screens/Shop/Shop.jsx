import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DishDetails from "../../components/DishDetails/DishDetails";
import { getAllDishes } from "../../services/dishes";
import "./Shop.css";

const Shop = ({ user, basket, setBasket }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchAllDishes = async () => {
      const allDishes = await getAllDishes();
      setDishes(allDishes);
    };
    fetchAllDishes();
  }, []);

  return (
    <div className="shop">
      <header>
        <h3>Shop</h3>
        {user ? (
          <Link to="/add-dish">Add New</Link>
        ) : (
          <Link to="/basket">
            <img
              id="to-basket"
              src="/assets/graphics/BasketClosed.png"
              alt="basket"
              width="45"
            />
          </Link>
        )}
      </header>
      <div className="dishes-div">
        {dishes?.map((dish) => (
          <DishDetails
            key={dish.id}
            user={user}
            dish={dish}
            basket={basket}
            setBasket={setBasket}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
