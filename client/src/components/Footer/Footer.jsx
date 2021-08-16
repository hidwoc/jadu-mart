import { NavLink, Link, useHistory } from "react-router-dom";
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
        <div className="socials">
          <Link
            to={{ pathname: "https://www.instagram.com/hidwoc/" }}
            target="_blank"
          >
            <img
              id="instagram"
              src={`${process.env.PUBLIC_URL}/assets/graphics/InstaOrange.png`}
              alt="instagram-logo"
              width="20"
            />
          </Link>
          <Link
            to={{ pathname: "https://github.com/hidwoc/jadu-mart/tree/main" }}
            target="_blank"
          >
            <img
              id="github"
              src={`${process.env.PUBLIC_URL}/assets/graphics/GithubOrange.png`}
              alt="github-logo"
              width="20"
            />
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/heidischoi/" }}
            target="_blank"
          >
            <img
              id="linkedin"
              src={`${process.env.PUBLIC_URL}/assets/graphics/LinkdinOrange.png`}
              alt="linkedin logo"
              width="20"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
