import React from "react";
import { displayClubs, stopClubs } from "../../services/ClubService";
import styles from "../../styles/ProductPage.module.css";
import SearchBar from "../SearchBar";
import Navbar from "../../layouts/Navbar";
import LoggedNavbar from "../../layouts/LoggedNavbar";
import firebase from '../../firebase/firebase';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: this.props.match.params.id,
      product: "",
      isLoggedIn: ""
    };
  }

  componentDidMount() {
    displayClubs(list => {
      this.setState({
        product: list.find(product => product.id === this.state.id)
      });
    });

    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isLoggedIn: true
        });
      } else {
        this.setState({
          isLoggedIn: false
        });
      }
    });
  }
  componentWillUnmount() {
    stopClubs();
  }

  render() {
    const { name, type, location, voivodeship, description, photo, link, cards } = this.state.product;
    return (
      <div>
        {this.state.isLoggedIn ? <LoggedNavbar /> : <Navbar />}
        <SearchBar />
        <div className={styles.singleProductContainer}>
          <div className={styles.singleProductItem}>
            <img src={photo} className={styles.singleProductPhoto} alt={name} />
            <div className={styles.singleProductDetails}>
              <div className={styles.singleProductName}>{name}</div>
              <div className={styles.singleProductType}>{type}</div>
              <div className={styles.singleProductLocation}>{location}, {voivodeship}</div>
              <div className={styles.singleProductLocation}><a className={styles.websiteLink} href={link}>{link}</a></div>
              <div className={styles.singleProductLocation}>Akceptowane karty lojalnościowe: {cards}</div>
              <div className={styles.singleProductDescription}>
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
