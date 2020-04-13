import React from "react";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import FavoritesBtn from "../components/btns/FavoritesBtn";
import MenuListComposition from "../components/btns/ProfileBtn";
import { useLocation } from 'react-router-dom'




const LoggedNavbar = () => {
  let location = useLocation();
  let locationPath = location.pathname
  return(
    <div 
    className={locationPath==='/' ? styles.transparent : styles.navbar}
    >
      <Logo />
      <div className={styles.navLinks}>
        <MenuListComposition />
        <FavoritesBtn />
      </div>
    </div>
  )
}

export default LoggedNavbar;
