import React from "react";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";

const Routers = () => (
  <Router>
    <Header />
    {/* <hr /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Switch>
  </Router>
);

export default Routers;
