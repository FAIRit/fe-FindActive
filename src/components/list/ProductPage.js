import React from "react";
import { displayClubs, stopClubs } from "../services/ClubService";
import styles from "../../styles/ProductPage.module.css";
import SearchBar from "../SearchBar";
import Navbar from "../../layouts/Navbar";
class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: this.props.match.params.id,
      product: ""
    };
  }
  componentDidMount() {
    displayClubs(list => {
      this.setState({
        product: list.find(product => product.id === this.state.id)
      });
    });
  }
  componentWillUnmount() {
    stopClubs();
  }

  render() {
    const { name, type, location, description, photo } = this.state.product;
    return (
      <div>
        <Navbar />
        <SearchBar />
        <div className={styles.singleProductContainer}>
          <div className={styles.singleProductItem}>
            <img src={photo} className={styles.singleProductPhoto} alt={name} />
            <div className={styles.singleProductDetails}>
              <div className={styles.singleProductName}>{name}</div>
              <div className={styles.singleProductType}>{type}</div>
              <div className={styles.singleProductLocation}>{location}</div>
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
