import React from "react";
import Logo from "../components/Logo";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
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
