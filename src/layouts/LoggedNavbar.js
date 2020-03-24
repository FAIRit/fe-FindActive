import React from "react";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import FavoritesBtn from "../components/btns/FavoritesBtn";
import MenuListComposition from "../components/btns/ProfileBtn";

class LoggedNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.navbarContainer}>
          <div className={styles.navbar}>
            <Logo />
            <div className={styles.navLinks}>
              <MenuListComposition />
              <FavoritesBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedNavbar;
