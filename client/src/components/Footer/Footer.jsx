import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../services/users";
import "./Footer.css";

const Footer = ({ user, setUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    setUser(null);
    history.push("/");
  };

  return (
    <footer>
      <div className="footer-left">
        <div>Jadu Mart</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          {user ? (
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </div>
      <div className="footer-right">
        <div id="copyright">© Heidi Choi 2021</div>
        <div className="socials">🙈 🙉 🙊</div>
      </div>
    </footer>
  );
};

export default Footer;
