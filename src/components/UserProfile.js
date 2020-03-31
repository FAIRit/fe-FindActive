import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import styles from "../styles/UserProfile.module.css";
import "firebase/storage";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import UpdatePassword from "./UpdatePassword";
import RemoveAccount from "./RemoveAccount";
import SearchBar from "./SearchBar";

const UserProfile = () => {
  const user = firebase.auth().currentUser;
  const storage = firebase.storage();
  const isLoggedIn = useAuth();

  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");

  const handleImageAsFile = e => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleFirebaseUpload = e => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    uploadTask.on(
      "state_changed",
      snapShot => {
        console.log(snapShot);
      },
      err => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then(firebaseUrl => {
            setImageAsUrl(prevObject => ({
              ...prevObject,
              imgUrl: firebaseUrl
            }));

            const currentUser = firebase.auth().currentUser;
            const id = currentUser.uid;

            firebase
              .database()
              .ref(`/users/${id}/photoURL`)
              .set(firebaseUrl);
          });
      }
    );
  };

  console.log(imageAsUrl);

  return (
    <div className={styles.userProfile}>
      {" "}
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
      <SearchBar />
      {isLoggedIn ? (
        <div>
          <div> Witaj, {user.displayName}! </div>
          <img
            src={
              imageAsUrl.imgUrl ||
              "https://semantic-ui.com/images/wireframe/image.png"
            }
            className={styles.profileImg}
            alt="user profile"
          />
          <div>
            <form onSubmit={handleFirebaseUpload}>
              <label htmlFor="file"> Zmień zdjęcie </label>{" "}
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={handleImageAsFile}
              />{" "}
              <button>zmień zdjęcie</button>{" "}
            </form>{" "}
          </div>{" "}
          <UpdatePassword />
          <RemoveAccount />
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
};

export default UserProfile;

// class UserProfile extends React.Component {

// // user = firebase.auth().currentUser;

//   state = {
//     image: null,
//     url: ''
//   }

//   componentDidMount(){
//     this.checkProfilePicture()
//   }

//   handleChange = e => {
//     if(e.target.files[0]){
//       const image = e.target.files[0]
//       this.setState({
//         image
//       }, () => {
//         this.handleUpload()
//         this.setState({
//           image: null
//         })
//       })
//     }
//   }

//   handleUpload = () => {
//     const storage = firebase.storage();

//     const {image} = this.state
//     if(image){
//       const uploadTask = storage.ref(`/images/${image.name}`).put(image)
//       uploadTask.on('state_changed',
//       (snapshot) => {
//         console.log(snapshot)
//       }, error => {
//         console.log(error)
//       }, () => {
//         storage.ref('images').child(image.name).getDownloadURL().then(url => {
//           console.log(url)
//           this.setState({url})
//           this.updateProfilePicture(url)

//         })
//       })
//     }
//   }

//   updateProfilePicture = (url) => {
//     const currentUser = firebase.auth().currentUser
//     const id = currentUser.uid
//     firebase.database().ref(`/users/${id}/profilePicture`).set(url)
// }

// checkProfilePicture = async () => {
//   const currentUser = firebase.auth().currentUser
//   if(currentUser){
//   const id = currentUser.uid
//   const dataSnapshot = await firebase.database().ref(`/users/${id}/profilePicture`).once('value')
//   const profilePictureUrl = dataSnapshot.val()
//   if (profilePictureUrl) {
//       this.setState({
//           url: profilePictureUrl
//       })
//   }
// }
// }

//   render() {
//    const user = firebase.auth().currentUser;

//     return (
//       <div className={styles.userProfile}>
//         {" "}
//         {user ? <LoggedNavbar /> : <Navbar />}
//         <SearchBar />
//         {user ? (
//           <div>
//             <div> Witaj, {user.displayName}! </div>
//             <img
//               src={
//                 this.state.url ||
//                 "https://semantic-ui.com/images/wireframe/image.png"
//               }
//               className={styles.profileImg}
//               alt="user profile"
//             />
//             <div>
//               <form>
//                 <label htmlFor="file"> Zmień zdjęcie </label>{" "}
//                 <input
//                   type="file"
//                   name="file"
//                   id="file"
//                   accept="image/*"
//                   onChange={this.handleChange}
//                 />{" "}
//                 <button>zmień zdjęcie</button>{" "}
//               </form>{" "}
//             </div>{" "}
//             <UpdatePassword />
//             <RemoveAccount />
//           </div>
//         ) : (
//           ""
//         )}{" "}
//       </div>
//     );
//   }
// }

// export default UserProfile;
