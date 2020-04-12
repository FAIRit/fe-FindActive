import React from "react";
import Logo from "../components/Logo";
import LoginBtn from "../components/btns/LoginBtn";
import RegisterBtn from "../components/btns/RegisterBtn";
import styles from "../styles/Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let locationPath = location.pathname;
  return (
    <div className={locationPath === "/" ? styles.transparent : styles.navbar}>
      <Logo />
      <div className={styles.navLinks}>
        <LoginBtn />
        <RegisterBtn />
      </div>
    </div>
  );
};

export default Navbar;
