import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>Jadu Mart</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
      <div>
        <div id="copyright">© Heidi Choi 2021</div>
        <div className="socials">🙈 🙉 🙊</div>
      </div>
    </footer>
  );
};

export default Footer;
