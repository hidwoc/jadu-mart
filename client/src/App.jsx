import { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "./components/Main/Main";
import Login from "./screens/Login/Login";
import Logout from "./components/Logout";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import { verify } from "./services/users";
import { createBasket } from "./services/baskets";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [basket, setBasket] = useState(null);
  const [toggleNewBasket, setToggleNewBasket] = useState(false);
  const history = useHistory()

  useEffect(() => {
    const verifyUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
    };
    verifyUser();
  }, []);

  useEffect(() => {
    const makeNewBasket = async () => {
      const newBasket = await createBasket();
      setBasket(newBasket);
    };
    makeNewBasket();
  }, [toggleNewBasket]);

  useEffect(() => {
    history.push('/home')
  },[])

  return (
    <div className="App">
      <Layout user={user}>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/logout">
          <Logout setUser={setUser} />
        </Route>
        <Route path="/thank-you">
          <OrderPlaced
            basket={basket}
            setToggleNewBasket={setToggleNewBasket}
          />
        </Route>
        <Main user={user} basket={basket} setBasket={setBasket} />
      </Layout>
    </div>
  );
}

export default App;
