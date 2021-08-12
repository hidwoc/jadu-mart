import Layout from "./Layout/Layout"
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Login/Login";


function App() {
  return (
    <div className="App">
      <Layout >
        <Login />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
