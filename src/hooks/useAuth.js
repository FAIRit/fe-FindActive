import { useState, useEffect } from "react";
import firebase from "../firebase/firebase";

export const useAuth = () => {
  const auth = firebase.auth();
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return isLoggedIn;
};
