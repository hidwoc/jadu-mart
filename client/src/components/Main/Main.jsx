import { Route } from "react-router-dom";
import AddDish from "../../screens/AddDish/AddDish";
import Basket from "../../screens/Basket/Basket";
import EditDish from "../../screens/EditDish/EditDish";
import Shop from "../../screens/Shop/Shop";
import Welcome from "../../screens/Welcome/Welcome";
import "./Main.css";

const Main = ({ user, basket, setBasket }) => {
  return (
    <div className="main">
      <Route exact path="/home">
        <Welcome />
      </Route>
      <Route path="/shop">
        <Shop user={user} basket={basket} setBasket={setBasket} />
      </Route>
      <Route path="/basket">
        <Basket basket={basket} setBasket={setBasket} />
      </Route>
      <Route path="/add-dish">
        <AddDish />
      </Route>
      <Route path="/edit-dish/:id">
        <EditDish />
      </Route>
    </div>
  );
};

export default Main;
