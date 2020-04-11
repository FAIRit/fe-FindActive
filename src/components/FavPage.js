import React, { Component } from "react";
import firebase from "../firebase/firebase";
import LoggedNavbar from "../layouts/LoggedNavbar";
import Navbar from "../layouts/Navbar";
import styles from "../styles/FavPage.module.css";
import { displayClubs, stopClubs } from "../services/ClubService";
import AddToFav from "./AddToFav";
import { addToFav } from "../services/AddToFavService";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

class FavPage extends Component {
  state = {
    isLoggedIn: false,
    favorites: {},
    productList: [],
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLoggedIn: true,
        });
        firebase
          .database()
          .ref("favorites")
          .child(user.uid)
          .on("value", (el) => {
            this.setState({
              favorites: el.val() || {},
            });
          });
      }
    });

    displayClubs((productList) => {
      this.setState({
        productList,
      });
    });
  }

  componentWillUnmount() {
    stopClubs();
  }
  


  loop() {
    const { productList, favorites } = this.state;
    const arrayOfFavorites = Object.keys(favorites);
    const output = [];
    productList.filter((item) => {
      arrayOfFavorites.forEach((element) => {
        if (element === item.id) {
          output.push(item);
          return output;
        } else {
          return;
        }
      });
    });
    if (output == undefined || output == 0) {
      return ["Lista ulubionych jest pusta"];
    }
    return output.map((product) => {
      return (
        <div className={styles.favContainer}>
          <Card>
            <Link to={`/product/${product.id}`}>
              <Image src={product.photo} wrapped />
            </Link>
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              {product.type}
              <Card.Meta>
                <span className="date">
                  {product.location}, {product.voivodeship}
                </span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <AddToFav
                id={product.id}
                isInFavorites={this.state.favorites[product.id]}
                onClick={() => {
                  addToFav(product.id, firebase.auth().currentUser);
                }}
              />
            </Card.Content>
          </Card>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <LoggedNavbar /> : <Navbar />}
        {this.loop()}
      </div>
    );
  }
}

export default FavPage;
