import React, { useState } from "react";
import firebase from "../firebase/firebase";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import styles from "../styles/UserProfile.module.css";
import "firebase/storage";
import { useAuth } from "../hooks/useAuth";
import UpdatePassword from './UpdatePassword'
import RemoveAccount from './RemoveAccount'


const UserProfile = () => {
  const user = firebase.auth().currentUser;
  const storage = firebase.storage();
  const isLoggedIn = useAuth();


  const allInputs = {
    imgUrl: ""
  };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const handleImageAsFile = e => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleFirebaseUpload = e => {
    e.preventDefault();
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
          .then(firebaseUrl => {
            setImageAsUrl(prevObject => ({
              ...prevObject,
              imgUrl: firebaseUrl
            }));

            const currentUser = firebase.auth().currentUser;
            const id = currentUser.uid;

            firebase
              .database()
              .ref(`/users/${id}/photoURL`)
              .set(firebaseUrl);
          });
      }
    );
  };

  // const removeProfile = () => {
  //   const user = firebase.auth().currentUser;
  //   const credential = firebase.auth.EmailAuthProvider.credential(
  //       user.email
  //   );
  //   user.reauthenticateWithCredential(credential);
  //   console.log(credential)
  // }




  return (
    <div className={styles.userProfile}>
      {" "}
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}{" "}
      {isLoggedIn ? (
        <div>
          <div> Witaj, {user.displayName}! </div> 
          <img
            src={
              imageAsUrl.imgUrl ||
              "https://semantic-ui.com/images/wireframe/image.png"
            }
            className={styles.profileImg}
            alt="user photo"
          />
          <div>
            <form onSubmit={handleFirebaseUpload}>
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
              <UpdatePassword/>
              <RemoveAccount/>
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
};

export default UserProfile;
