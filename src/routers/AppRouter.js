import React from "react";
import { Route, Switch } from "react-router-dom";
import Showcase from "../components/Showcase";
import List from "../components/List";


const AppRouter = () => (
  <Switch>
    <Route path="/" component={Showcase} exact />
    <Route path="/list" component={List} exact />
  </Switch>
);

export default AppRouter;
