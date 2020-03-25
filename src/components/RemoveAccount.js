import React, {useState} from "react";
import { Redirect } from 'react-router-dom';
import firebase from "../firebase/firebase";

const RemoveAccount = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  const reauthenticate = currentPassword => {
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
          .catch(error => {
            console.log("nie usunięto profilu" + error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div
      style={{
        padding: "60px"
      }}
    >
      <input
        type="password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
        placeholder="wpisz hasło"
      />
      <button onClick={removeAccount}> usuń konto </button>{" "}
    </div>
  );
};

export default RemoveAccount;
