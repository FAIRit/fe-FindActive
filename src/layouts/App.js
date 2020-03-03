import React from "react";
import styles from '../styles/App.module.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../routers/AppRouter";
import Footer from "./Footer";
import '../firebase/firebase'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <AppRouter />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
