import React from "react";
import firebase from "../firebase/firebase";

class UpdatePassword extends React.Component {
  state = {
    currentPassword: "",
    newPassword: ""
  };

  reauthenticate = currentPassword => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  changePassword = () => {
    const user = firebase.auth().currentUser;
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        user
          .updatePassword(this.state.newPassword)
          .then(() => {
            console.log("zmieniono hasło");
          })
          .catch(error => {
            console.log('nie zmieniono hasła' + error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  render() {
    return (
      <div style={{padding: '60px'}}>
        <input
          type="password"
          value={this.state.currentPassword}
          onChange={e => {
            this.setState({ currentPassword: e.target.value });
          }}
          placeholder="obecne hasło"
        />
        <input
          type="password"
          value={this.state.newPassword}
          onChange={e => {
            this.setState({ newPassword: e.target.value });
          }}
          placeholder="nowe hasło"
        />
        <button onClick={this.changePassword}>zmień hasło</button>
      </div>
    );
  }
}

export default UpdatePassword;
