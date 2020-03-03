import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Showcase from "../components/Showcase";
import ProductListPage from "../components/list/ProductListPage";
import Faq from "../components/Faq";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";
import ProductPage from '../components/list/ProductPage'

const AppRouter = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Showcase} exact />
      <Route path="/products" component={ProductListPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/faq" component={Faq} exact />
      <Route path="/privacy" component={PrivacyPolicy} exact />
      <Route path="/terms" component={TermsAndConditions} exact />
    </Switch>
    </BrowserRouter>
);

export default AppRouter;
