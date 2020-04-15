import firebase from "../firebase/firebase";

const prepareClubs = (response) => {
  return Object.entries(response).map((arr) => {
    const [id, value] = arr;
    return {
      id,
      ...value,
    };
  });
};

export const displayClubs = (onSuccess) => {
  return firebase
    .database()
    .ref("/clubs")
    .on("value", (dataSnapshot) => {
      const clubs = dataSnapshot.val();
      onSuccess(prepareClubs(clubs));
    });
};

export const stopClubs = () => {
  firebase.database().ref("/clubs").off();
};
