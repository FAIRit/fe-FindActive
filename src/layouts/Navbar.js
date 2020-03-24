import React from "react";
import Logo from "../components/Logo";
import LoginBtn from "../components/btns/LoginBtn";
import RegisterBtn from "../components/btns/RegisterBtn";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navLinks}>
          <LoginBtn />
          <RegisterBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
