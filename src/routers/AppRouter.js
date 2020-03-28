import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Showcase from "../components/Showcase";
import ProductListPage from "../components/list/ProductListPage";
import Faq from "../components/Faq";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";
import ProductPage from '../components/list/ProductPage';
import UserProfile from '../components/UserProfile';
import AddProduct from "../components/AddProduct";



const AppRouter = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Showcase} exact />
      <Route path="/products" component={ProductListPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/faq" component={Faq} exact />
      <Route path="/privacy" component={PrivacyPolicy} exact />
      <Route path="/terms" component={TermsAndConditions} exact />
      <Route path="/profile" component={UserProfile} exact />
      <Route path="/addproduct" component={AddProduct} exact />
    </Switch>
    </BrowserRouter>
);

export default AppRouter;
