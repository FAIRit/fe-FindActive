import React, { useState } from "react";
import firebase from "../firebase/firebase";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import styles from '../styles/UserProfile.module.css';
import userPlaceholder from '../img/user.jpg'


const UserProifile = () => {
  const user = firebase.auth().currentUser;
  const storage = firebase.storage()
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
 
  const [profilePicture, updateProfilePicture] = useState(userPlaceholder)

 





  return (
    <div className={styles.userProfile}>
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
      {isLoggedIn ? (
        <div>
          <div>Witaj, {user.displayName}!</div>
          <img src={profilePicture} className={styles.profileImg} alt="profile image"/>
          <div>
            <form>
          <label for="file">Zmień zdjęcie</label><input type="file"  accept="image/*"  name="file" id="file" />
          </form>
         
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProifile;
