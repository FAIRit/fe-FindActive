import React from "react";
import styles from "../styles/Showcase.module.css";
import Navbar from "../layouts/Navbar";
import MainInfo from "./MainInfo";
import Faq from "./Faq";
import CenterMode from "./slider/CenterMode";
import SearchBar from "./SearchBar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import { useAuth } from '../hooks/useAuth'


const Showcase = () => {
  const isLoggedIn = useAuth();
  
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

