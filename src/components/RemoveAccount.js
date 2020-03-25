import React from "react";
import firebase from "../firebase/firebase";

class RemoveAccount extends React.Component {
  state = {
    currentPassword: ""
  };

  reauthenticate = currentPassword => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credential);
  };

  removeAccount = () => {
    const user = firebase.auth().currentUser;
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        user
          .delete()
          .then(() => {
            console.log('usunięto profil');
          })
          .catch(error => {
            console.log('nie usunięto profilu' + error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  
  render() {
    return (
      <div style={{ padding: "60px" }}>
        <input
          type="password"
          value={this.state.currentPassword}
          onChange={e => {
            this.setState({ currentPassword: e.target.value });
          }}
          placeholder="wpisz hasło"
        />
        <button onClick={this.removeAccount}>usuń konto</button>
      </div>
    );
  }
}

export default RemoveAccount;
