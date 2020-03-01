import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
      <div>FOLLOW US</div>
      <div className={styles.socialLogos}>
        <NavLink to='#' className={styles.link}><FontAwesomeIcon icon={faFacebook} size={"2x"} /></NavLink>
        <NavLink to='#' className={styles.link}><FontAwesomeIcon icon={faInstagram} size={"2x"} /></NavLink>
        <NavLink to='#' className={styles.link}><FontAwesomeIcon icon={faTwitter} size={"2x"} /></NavLink>
      </div>
      <div className={styles.links}>
        <NavLink to="/terms" className={styles.link}>
          Terms and conditions
        </NavLink>{" "}
        <NavLink to="/privacy" className={styles.link}>
          Privacy Policy
        </NavLink>{" "}
        <NavLink to="/faq" className={styles.link}>
          FAQ
        </NavLink>
      </div>
      Copyright FindActive &copy; 2020
    </div>
  );
};

export default Footer;
