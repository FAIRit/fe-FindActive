import React from "react";
import styles from "../styles/Showcase.module.css";
import Navbar from "../layouts/Navbar";
import MainInfo from "./MainInfo";
import Faq from "./Faq";
import CenterMode from "./TopCategorie";

const Showcase = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          <Navbar/>
          <span className={styles.title}>
            {" "}
            Search for sports clubs. Get that workout in, wherever you are.{" "}
          </span>
        </div>
      </div>
      <MainInfo />
      <div>
        {" "}
        <CenterMode/>
      </div>
      <Faq />
    </div>
  );
};

export default Showcase;
