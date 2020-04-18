import React from "react";
import { Link, NavLink } from "react-router-dom";
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
      <div>MEDIA SPOŁECZNOŚCIOWE</div>
      <div className={styles.socialLogos}>
        <a href='https://www.facebook.com/' className={styles.link}><FontAwesomeIcon icon={faFacebook} size={"2x"} /></a>
        <a href='https://www.instagram.com/' className={styles.link}><FontAwesomeIcon icon={faInstagram} size={"2x"} /></a>
        <a href='https://twitter.com/explore' className={styles.link}><FontAwesomeIcon icon={faTwitter} size={"2x"} /></a>
      </div>
      <div className={styles.links}>
        <NavLink to="/terms" className={styles.link}>
          Regulamin
        </NavLink>{" "}
        <NavLink to="/privacy" className={styles.link}>
          Polityka prywatności
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
