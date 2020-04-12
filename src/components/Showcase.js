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
            Wyszukuj obiektów sportowych. Zrób trening, gdziekolwiek jesteś.{" "}
          </span>
          <span className={styles.secondTitle}>
            Trenowanie nigdy nie było łatwiejsze.
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

