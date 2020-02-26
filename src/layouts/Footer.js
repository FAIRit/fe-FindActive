import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
      <div className={styles.links}>
        <NavLink to="/terms" className={styles.link}>
          Terms and conditions
        </NavLink>
        {" "}  {" "}
        <NavLink to="/privacy" className={styles.link}>
          Privacy Policy
        </NavLink>
        {" "}  {" "}
        <NavLink to="/faq" className={styles.link}>
          FAQ
        </NavLink>
      </div>
      Copyright FindActive &copy; 2020
    </div>
  );
};

export default Footer;
