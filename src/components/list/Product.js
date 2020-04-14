import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddToFav from "../../components/AddToFav";
import { addToFav } from "../../services/AddToFavService";
import firebase from "../../firebase/firebase";
import { Card, Image } from "semantic-ui-react";
import styles from '../../styles/Product.module.css';
import Rat from '../../components/Rating'

class Product extends Component {
  
  state = {
    favorites: {},
    rating: ''
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
      rating
    } = this.props;
    return (
      <Card style={{width: '350px',  height: "430px", background: '#f0b4e4', margin: '0 15px 0 15px'}}>
        <Link to={`/product/${id}`}>
          <Image src={photo} wrapped />
        </Link>
        <Card.Content>
          <Link to={`/product/${id}`}>
            <Card.Header><div className={styles.productTitle}>{name}</div></Card.Header>
          </Link>
          <Card.Meta>{type}</Card.Meta>
          <Card.Description>
           <div> {location}, {voivodeship} </div>
           <div><a href={link} className={styles.productLink}>{link}</a></div>
          </Card.Description>
           <Rat id={id} name={name}/>
        </Card.Content>
        <Card.Content extra style={{background: '#f0b4e4'}}>
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
