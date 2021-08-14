import React from "react";
import Footer from "../components/Footer/Footer"

const Layout = ({children, user, setUser}) => {
  return (
    <div className="layout-div">
      <div className="layout-children">{children}</div>
      <Footer user={user} setUser={setUser}/>
    </div>
  );
};

export default Layout;
