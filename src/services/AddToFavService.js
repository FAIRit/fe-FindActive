import firebase from "../firebase/firebase";

export const addToFav = (productID, auth) => {
  firebase
    .database()
    .ref("favorites")
    .child(auth.uid)
    .child(productID)
    .transaction(currentValue => (currentValue ? null : true));
};
