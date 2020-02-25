import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
      <NavLink to="/terms">Terms and conditions</NavLink>
      <NavLink to="/privacy">Privacy Policy</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
    </div>
  );
};

export default Footer;
