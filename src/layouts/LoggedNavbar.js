import React from "react";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import firebase from "../firebase/firebase";

class LoggedNavbar extends React.Component {
  render() {
    const auth = firebase.auth();
    const signOut = () => {
      auth.signOut().then(() => {
        console.log("signed out");
      });
    };
    return (
      <div>
        <div className={styles.navbarContainer}>
          <div className={styles.navbar}>
            <Logo />
            <div className={styles.navLinks}>
              <button onClick={signOut}>Log out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedNavbar;
