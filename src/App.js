import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import UserProfile from "../src/views/UserProfile/UserProfile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user-profile" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
