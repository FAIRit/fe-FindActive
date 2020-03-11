import React, { useState } from "react";
import firebase from "../firebase/firebase";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import styles from "../styles/UserProfile.module.css";
import userPlaceholder from "../img/user.jpg";


const UserProfile = () => {
  const auth = firebase.auth();
  const user = firebase.auth().currentUser;
  const storage = firebase.storage();
  const [isLoggedIn, setIsLoggedIn] = useState("");



  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  var [profilePicture, updateProfilePicture] = useState(userPlaceholder);

updateProfilePicture = e => {
    if (e.target.files[0]){
      user
      .updateProfile({
        imageURL: e.target.files[0]
        })
      }
    }

    return (
      <div className={styles.userProfile}>
        {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
        {isLoggedIn ? (
          <div>
            <div>Witaj, {user.displayName}!</div>
            <img
              src={profilePicture}
              className={styles.profileImg}
              alt="profile image"
            />
            <div>
              <label for="file">Zmień zdjęcie</label>
              <input
                onChange={updateProfilePicture}
                type="file"
                accept="image/*"
                name="file"
                id="file"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

export default UserProfile;
