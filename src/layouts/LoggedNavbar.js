import React from "react";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import FavoritesBtn from "../components/btns/FavoritesBtn";
import SearchBtn from '../components/btns/SearchBtn'
import MenuListComposition from "../components/btns/ProfileBtn";
import { useLocation } from "react-router-dom";

const LoggedNavbar = () => {
  let location = useLocation();
  let locationPath = location.pathname;
  return (
    <div className={locationPath === "/" ? styles.transparent : styles.navbar}>
      <div className={styles.navbarContainer}>
        <Logo />
        <div className={styles.navLinks}>
          <MenuListComposition />
          <SearchBtn />
          <FavoritesBtn />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default LoggedNavbar;
