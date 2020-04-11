import React, { Component } from "react";
import styles from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import AddToFav from "../../components/AddToFav";
import { addToFav } from "../../services/AddToFavService";
import firebase from '../../firebase/firebase'

// const Product = (props) => {
//   return (
//     <div className={styles.productContainer}>
//       <div className={styles.product}>
//         <Link to={`/product/${props.id}`}>
//           <img src={props.photo} alt="product" />
//         </Link>
//         <div className={styles.productDescription}>
//           <Link to={`/product/${props.id}`}>
//             <div className={styles.productName}>{props.name}</div>
//           </Link>
//           <div className={styles.productType}> {props.type}</div>
//           <div className={styles.productLocation}>
//             {props.location}, {props.voivodeship}
//           </div>
//           <a href={props.link}>
//             <div className={styles.productLocation}>{props.link}</div>
//           </a>
//           <div className={styles.productLocation}>{props.cards}</div>
//         </div>
//         <AddToFav
//           onClick={() => {
//             addToFav(props.id, firebase.auth().currentUser);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

class Product extends Component {
  state = {
    favorites: {},
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("favorites")
          .child(user.uid)
          .on("value", (value) => {
            this.setState({
              favs: value.val() || {},
            });
          });
      }
    });
  }

  componentWillUnmount() {
    firebase.database().ref("favorites").off();
  }

  render() {
    const {
      id,
      name,
      type,
      link,
      cards,
      voivodeship,
      photo,
      location,
    } = this.props;
    return (
      <div className={styles.productContainer}>
        <div className={styles.product}>
          <Link to={`/product/${id}`}>
            <img src={photo} alt="product" />
          </Link>
          <div className={styles.productDescription}>
            <Link to={`/product/${id}`}>
              <div className={styles.productName}>{name}</div>
            </Link>
            <div className={styles.productType}> {type}</div>
            <div className={styles.productLocation}>
              {location}, {voivodeship}
            </div>
            <a href={link}>
              <div className={styles.productLocation}>{link}</div>
            </a>
            <div className={styles.productLocation}>{cards}</div>
          </div>
          <AddToFav
          onClick={() => {
            addToFav(this.props.id, firebase.auth().currentUser);
          }}
          />
        </div>
      </div>
    );
  }
}

export default Product;

// onClick={() => addToFav(firebase.auth().currentUser)}

// import { addToFav } from '../../services/AddToFavService';
// import firebase from '../../firebase/firebase'
