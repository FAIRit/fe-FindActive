import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../routers/AppRouter";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Nav />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
