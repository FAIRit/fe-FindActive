import React, { useState } from "react";
import firebase from "../firebase/firebase";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import styles from "../styles/UserProfile.module.css";
import userPlaceholder from "../img/user.jpg";
import "firebase/storage";

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

  const allInputs = {
    imgUrl: ""
  };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  console.log(imageAsFile);
  const handleImageAsFile = e => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleFireBaseUpload = e => {
    e.preventDefault();
    console.log("start of upload");
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    uploadTask.on(
      "state_changed",
      snapShot => {
        console.log(snapShot);
      },
      err => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({
              ...prevObject,
              imgUrl: fireBaseUrl
            }));

            const currentUser = firebase.auth().currentUser;
            const id = currentUser.uid;
            firebase
              .database()
              .ref(`/users/${id}/profilePicture`)
              .set(fireBaseUrl);
          });
      }
    );
  };

  return (
    <div className={styles.userProfile}>
      {" "}
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}{" "}
      {isLoggedIn ? (
        <div>
          <div> Witaj, {user.displayName}! </div>{" "}
          <img src={imageAsUrl.imgUrl} alt="image tag" />
          <div>
            <form onSubmit={handleFireBaseUpload}>
              <label htmlFor="file"> Zmień zdjęcie </label>{" "}
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleImageAsFile}
              />{" "}
              <button> upload to firebase </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
};

export default UserProfile;
