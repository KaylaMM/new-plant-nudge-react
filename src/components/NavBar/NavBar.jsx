import React from "react";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar" position="static">
        <img alt="" src="" className="nav-bar-logo" />
        <h3>PN</h3>
        <LogIn />
        <SignUp />
      </nav>
    </div>
  );
};

export default NavBar;
