import React from "react";
import firebase from "../firebase/firebase";

const UserProifile = () => {
  const user = firebase.auth().currentUser;

  return (
    <div>
      {user ? (
        <div>
          {user.email} {user.displayName}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProifile;
