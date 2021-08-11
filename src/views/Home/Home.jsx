import React from "react";

import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-container">
        <img alt="" src="" className="home-page-logo" />
        <div className="home-page-text">
          <NavBar />

          <h3> Welcome to </h3>
          <h1> Plant Nudge </h1>
          <h3> an app to help you remember when to water your urban oasis! </h3>
        </div>
        <div className="home-page-buttons"></div>
      </div>
    </div>
  );
};

export default Home;
