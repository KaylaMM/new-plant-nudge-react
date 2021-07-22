import React from "react";
import Home from "./components/Home/Home.jsx";
import "./App.css";

import UserProfile from "./components/UserProfile/UserProfile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Home />
      <UserProfile />
    </div>
  );
}

export default App;
