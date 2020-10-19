import React from "react";
import LogIn from "../LogIn/LogIn";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar" position="static">
        <img alt="" src="" className="nav-bar-logo" />
        <h3>Plant Nudge</h3>
        <LogIn />
      </nav>
    </div>
  );
};

export default NavBar;
