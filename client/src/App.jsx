import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";
import { verify } from "./services/users";
import { createBasket, deleteBasket } from "./services/baskets";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    const verifyUser = async() => {
      const user = await verify()
      user ? setUser(user) : setUser(null)
    }
    verifyUser()
  },[])

  useEffect(() => {
    const getNewBasket = async () => {
      const newBasket = await createBasket();
      setBasket(newBasket);
    };
    getNewBasket();
    return () => {
      const clearBasket = async () => {
        await deleteBasket(basket.id);
        setBasket(null);
      };
      clearBasket();
    };
  }, []);

  return (
    <div className="App">
      <Layout user={user}>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Main user={user} basket={basket}/>
        <Footer user={user} setUser={setUser} />
      </Layout>
    </div>
  );
}

export default App;
