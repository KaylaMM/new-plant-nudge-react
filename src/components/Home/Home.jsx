import React from "react";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-container">
        <img alt="" src="" className="home-page-logo" />
        <div className="home-page-text">
          <h3> Welcome to </h3>
          <h1> Plant Nudge </h1>
          <h3> an app to help you remember when to water your urban oasis! </h3>
        </div>
        <div className="home-page-buttons">
          <LogIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
