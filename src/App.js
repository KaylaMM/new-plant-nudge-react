import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import UserProfile from "../src/views/UserProfile/UserProfile.jsx";
import SignUp from "./views/SignUp/SignUp";
import LogIn from "./views/LogIn/LogIn";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/longin" component={LogIn} />
            <Route exact path="/user-profile" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
