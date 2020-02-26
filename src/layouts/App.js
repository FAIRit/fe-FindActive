import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../routers/AppRouter";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Router>
        <AppRouter />
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
