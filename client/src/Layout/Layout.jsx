import React from "react";

const Layout = (props) => {
  return (
    <div className="layout-div">
      Layout
      <div className="layout-children">{props.children}</div>
      Layout
    </div>
  );
};

export default Layout;
