import { useState } from "react"
import { Route } from "react-router-dom";
import Layout from "./Layout/Layout"
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";
import "./App.css";


function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Layout user={user} >
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Main user={user} />
        <Footer user={user}/>
      </Layout>
    </div>
  );
}

export default App;
