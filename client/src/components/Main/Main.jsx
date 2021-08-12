import React from "react";
import { Route } from "react-router-dom";
import AddDish from "../../screens/AddDish/AddDish";
import Basket from "../../screens/Basket/Basket";
import EditDish from "../../screens/EditDish/EditDish";
import Shop from "../../screens/Shop/Shop";
import Welcome from "../../screens/Welcome/Welcome";

const Main = () => {
  return (
    <div>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/basket">
        <Basket />
      </Route>
      <Route path="/add-dish">
        <AddDish />
      </Route>
      <Route path="/edit-dish">
        <EditDish />
      </Route>
    </div>
  );
};

export default Main;
