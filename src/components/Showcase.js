import React, { useState } from "react";
import styles from "../styles/Showcase.module.css";
import Navbar from "../layouts/Navbar";
import MainInfo from "./MainInfo";
import Faq from "./Faq";
import CenterMode from "./slider/CenterMode";
import SearchBar from "./SearchBar";
import firebase from "../firebase/firebase";
import LoggedNavbar from "../layouts/LoggedNavbar";


const Showcase = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
    } else {setIsLoggedIn(false)};
  });

  
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
          <span className={styles.title}>
            {" "}
            Search for sports clubs. Get that workout in, wherever you are.{" "}
          </span>
          <span className={styles.secondTitle}>
            Working out has never been easier.
          </span>
          <SearchBar />
        </div>
      </div>
      <MainInfo />
      <div>
        {" "}
        <CenterMode />
      </div>
      <Faq />
    </div>
  );
};

export default Showcase;

