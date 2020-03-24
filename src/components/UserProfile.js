import React, { useState } from "react";
import firebase from "../firebase/firebase";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import styles from "../styles/UserProfile.module.css";
import "firebase/storage";
import { useAuth } from '../hooks/useAuth'

const UserProfile = () => {
  const user = firebase.auth().currentUser;
  const storage = firebase.storage();
  const isLoggedIn = useAuth();

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
              .ref(`/users/${id}/photoURL`)
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
          <div> Witaj, {user.displayName}! </div> <div></div>
          <img
            src={
              imageAsUrl.imgUrl ||
              "https://semantic-ui.com/images/wireframe/image.png"
            }
            className={styles.profileImg}
            alt="image tag"
          />
          <div>
            <form onSubmit={handleFireBaseUpload}>
              <label htmlFor="file"> Zmień zdjęcie </label>{" "}
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={handleImageAsFile}
              />{" "}
              <button>zmień zdjęcie</button>{" "}
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
