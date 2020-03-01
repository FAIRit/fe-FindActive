import React from "react";
import styles from "../styles/Showcase.module.css";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";
import MainInfo from "./MainInfo";
import Faq from "./Faq";
import CenterMode from "./TopCategorie";

const Showcase = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          <nav>
            <Logo />
            <div className={styles.btns}>
              <LoginBtn />
              <RegisterBtn />
            </div>
          </nav>
          <span className={styles.title}>
            {" "}
            Search for sports clubs. Get that workout in, wherever you are.{" "}
          </span>
        </div>
      </div>
      <MainInfo />
      <div style={{ width: "60%", margin: "0 auto" }}>
        {" "}
        <CenterMode />{" "}
      </div>
      <Faq />
    </div>
  );
};

export default Showcase;
