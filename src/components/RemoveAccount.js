import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { Input, Button } from "semantic-ui-react";
import style from "../styles/RemoveAccount.module.css";

const RemoveAccount = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  const reauthenticate = (currentPassword) => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  const removeAccount = () => {
    const user = firebase.auth().currentUser;
    reauthenticate(currentPassword)
      .then(() => {
        user
          .delete()
          .then(() => {
            console.log("usunięto profil");
          })
          .catch((error) => {
            console.log("nie usunięto profilu" + error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={style.removeAccountContainer}>
      <Input
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="wpisz hasło"
        className={style.removeAccountInput}
      />
      <Button basic color="black" onClick={removeAccount}>
        {" "}
        usuń konto{" "}
      </Button>{" "}
    </div>
  );
};

export default RemoveAccount;
