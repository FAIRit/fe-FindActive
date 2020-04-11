import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { Input, Button } from "semantic-ui-react";
import style from '../styles/UpdatePassword.module.css';
import {Formik} from 'formik'


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
            console.log(error)
          });
      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <div className={style.changePasswordContainer}>
      <Input
        type="password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)}
        placeholder="obecne hasło"
      />
      <Input
        type="password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        placeholder="nowe hasło"
      />
      <Button basic color="black" onClick={changePassword}>zmień hasło</Button>
    </div>
  );
};

export default UpdatePassword;


