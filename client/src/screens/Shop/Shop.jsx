import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DishDetails from "../../components/DishDetails/DishDetails";
import { getAllDishes } from "../../services/dishes";

const Shop = ({ user, basket }) => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const fetchAllDishes = async() => {
      const allDishes = await getAllDishes()
      setDishes(allDishes)
    }
    fetchAllDishes()
  },[])

  return (
    <div className="shop">
      <h3>Shop</h3>
      {user ? (
        <Link to="/add-dish">Add New</Link>
      ) : (
        <Link to="/basket">Basket</Link>
      )}
      <div className="dishes-div">
        {dishes?.map(dish => (
          <DishDetails key={dish.id} user={user} dish={dish} basket={basket}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;
