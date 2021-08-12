import { useState } from "react";
import { useHistory } from "react-router-dom"
import { login } from "../../services/users";
import { handleChange } from "../../utils/helpers";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const helpers = [user, setUser];
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login();
    res ? history.push('/shop') : console.log("Invalid Credentials")
  }
  return (
    <div>
      Welcome Admin!
      <form onSubmit={handleSubmit}>
        <div className="login-inputs">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={e => handleChange(e, helpers)}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={e => handleChange(e, helpers)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
