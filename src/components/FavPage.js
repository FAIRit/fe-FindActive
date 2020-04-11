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

  displayFavorites() {
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
        <div
          style={{
            padding: "15px 0 15px 0",
          }}
        >
          <Card style={{ width: "300px", height: "350px" }}>
            <Link to={`/product/${product.id}`}>
              <Image src={product.photo} wrapped />
            </Link>
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>
                <span className="date">
                  {product.location}, {product.voivodeship}
                </span>
                <div style={{ color: "black" }}>{product.type}</div>
              </Card.Meta>
            </Card.Content>
            <Card.Content
              extra
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
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
      <div className={styles.favPage}>
        {this.state.isLoggedIn ? <LoggedNavbar /> : <Navbar />}
        <h2>ULUBIONE</h2>
        <div className={styles.favPageContainer}>{this.displayFavorites()}</div>
      </div>
    );
  }
}

export default FavPage;
