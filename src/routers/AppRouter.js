import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import List from "../components/List";
import Faq from "../components/Faq";
import PrivacyPolicy from "../components/PrivacyPolicy";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/list" component={List} exact />
    <Route path="/faq" component={Faq} exact />
    <Route path="/privacy" component={PrivacyPolicy} exact />
  </Switch>
);

export default AppRouter;
