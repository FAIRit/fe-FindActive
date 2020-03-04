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
    return (
      <div>
        <Navbar />
        <SearchBar />
        <div className={styles.container}>
          <img src={this.state.product.photo} alt={this.state.product.name} />
          <div>{this.state.product.name}</div>
          <div>{this.state.product.type}</div>
          <div>{this.state.product.location}</div>
          <div>{this.state.product.description}</div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
