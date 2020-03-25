import React, { useState } from "react";
import firebase from "../firebase/firebase";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const reauthenticate = currentPassword => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  const changePassword = () => {
    const user = firebase.auth().currentUser;
    reauthenticate(currentPassword)
      .then(() => {
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log("zmieniono hasło");
          })
          .catch(error => {
            console.log("nie zmieniono hasła" + error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div style={{ padding: "60px" }}>
      <input
        type="password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
        placeholder="obecne hasło"
      />
      <input
        type="password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        placeholder="nowe hasło"
      />
      <button onClick={changePassword}>zmień hasło</button>
    </div>
  );
};

export default UpdatePassword;
