import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import OneMin from "./Components/OneMin";
import TwoMin from "./Components/TwoMin";
import Aboutme from "./Components/Aboutme";

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/type" component={App} />
      <Route path="/onemin" component={OneMin} />
      <Route path="/twomin" component={TwoMin} />
      <Route path="/aboutme" component={Aboutme} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
