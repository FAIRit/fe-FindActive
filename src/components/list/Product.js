import React, { Component } from "react";
import styles from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import AddToFav from "../../components/AddToFav";
import { addToFav } from "../../services/AddToFavService";
import firebase from "../../firebase/firebase";
import { Card, Image } from "semantic-ui-react";

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
      <Card style={{width: '350px'}}>
        <Link to={`/product/${id}`}>
          <Image src={photo} wrapped />
        </Link>
        <Card.Content>
          <Link to={`/product/${id}`}>
            <Card.Header>{name}</Card.Header>
          </Link>
          <Card.Meta>{type}</Card.Meta>
          <Card.Description>
           <div> {location}, {voivodeship} </div>
           <div><a href={link}>{link}</a></div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <AddToFav
            onClick={() => {
              addToFav(this.props.id, firebase.auth().currentUser);
            }}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default Product;
