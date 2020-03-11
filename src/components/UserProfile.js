import React, { useState } from "react";
import firebase from "../firebase/firebase";

const UserProifile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const user = firebase.auth().currentUser;

  const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <div>{user.email}</div> <div>{user.displayName}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProifile;
