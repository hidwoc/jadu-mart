import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = ({ children, user }) => {
  return (
    <div className="layout-div">
      <div className="layout-children">{children}</div>
      <Footer user={user} />
    </div>
  );
};

export default Layout;
