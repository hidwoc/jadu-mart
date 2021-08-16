import { useState } from "react";
import { useHistory } from "react-router-dom"
import { login } from "../../services/users";
import { handleChange } from "../../utils/helpers";
import "./Login.css"

const Login = ({setUser}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login(data);
    if (res) {
      setUser(res)
      history.push('/shop') 
    } else {
      console.log('invalid credentials')
      // TODO: render "invalid credentials" message
    }
  }

  return (
    <div className="login">
      <h2 id="welcome-admin">Welcome Admin!</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-inputs">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={e => handleChange(e, data, setData)}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={e => handleChange(e, data, setData)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
