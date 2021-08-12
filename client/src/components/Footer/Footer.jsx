import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>Jadu Mart</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/login">Login</Link>
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
