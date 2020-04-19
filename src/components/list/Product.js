import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addToFav } from "../../services/AddToFavService";
import firebase from "../../firebase/firebase";
import { Card, Image, Icon } from "semantic-ui-react";
import styles from "../../styles/Product.module.css";
import Rat from "../../components/Rating";

class Product extends Component {
  state = {
    favorites: {},
    rating: "",
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
              favorites: value.val() || {},
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
      voivodeship,
      photo,
      location,
      rating,
    } = this.props;
    return (
      <Card
        style={{
          width: "320px",
          height: "450px",
          background: "#f0b4e4",
          margin: "0 15px 0 15px",
        }}
        maxWidth={300}

      >
        <Link to={`/product/${id}`}>
          <Image src={photo} wrapped />
        </Link>
        <Card.Content>
          <Link to={`/product/${id}`}>
            <Card.Header>
              <div className={styles.productTitle}>{name}</div>
            </Card.Header>
          </Link>
          <Card.Meta>{type}</Card.Meta>
          <Card.Description>
            <div>
              {" "}
              {location}, {voivodeship}{" "}
            </div>
            <div>
              <a href={link} className={styles.productLink}>
                {link}
              </a>
            </div>
          </Card.Description>
          <Rat id={id} name={name} />
        </Card.Content>
        <Card.Content extra style={{ background: "#f0b4e4" }}>
          <Icon
            onClick={() => {
              addToFav(this.props.id, firebase.auth().currentUser);
            }}
            name={this.state.favorites[id] ? "heart" : "heart outline"}
            className={styles.favProductIcon}
            size="large"
          />
        </Card.Content>
      </Card>
    );
  }
}

export default Product;
