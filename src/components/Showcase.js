import React from "react";
import styles from "../styles/Showcase.module.css";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";

const Showcase = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Logo />
        <div className={styles.btns}>
          <LoginBtn />
          <RegisterBtn />
        </div>
      </nav>
      <div className={styles.showcase}></div>
    </div>
  );
};

export default Showcase;
