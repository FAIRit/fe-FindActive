import React, { useState } from "react";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import firebase from "../firebase/firebase";
import MenuList from "@material-ui/core/MenuList";

import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import MenuListComposition from '../components/ProfileBtn'

class LoggedNavbar extends React.Component {

  render() {



    return (
      <div>
        <div className={styles.navbarContainer}>
          <div className={styles.navbar}>
            <Logo />
            <div className={styles.navLinks}>
             
              {/* <FontAwesomeIcon
                icon={farFaHeart}
                size={"2x"}
                className={styles.profileIcon}
              /> */}
              <MenuListComposition/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedNavbar;
