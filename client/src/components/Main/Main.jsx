import React from "react";
import { Route } from "react-router-dom";
import AddDish from "../../screens/AddDish/AddDish";
import Basket from "../../screens/Basket/Basket";
import EditDish from "../../screens/EditDish/EditDish";
import Shop from "../../screens/Shop/Shop";
import Welcome from "../../screens/Welcome/Welcome";

const Main = ({user, basket}) => {
  return (
    <div>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/shop">
        <Shop user={user} basket={basket}/>
      </Route>
      <Route path="/basket">
        <Basket bakset={basket}/>
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
