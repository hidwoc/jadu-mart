import Layout from "./Layout/Layout"
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Layout >
        <Route exact path="/login">
          <Login />
        </Route>
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
