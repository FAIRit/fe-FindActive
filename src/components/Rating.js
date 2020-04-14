import React from "react";
import { Rating } from "semantic-ui-react";
import firebase from "../firebase/firebase";

class Rat extends React.Component {
  state = {
    disabled: false,
    avg1: ''
  };

  handleRate = (e, { rating }) => {
    this.setState({
      rating,
    });
    firebase.database().ref(`/clubs/${this.props.id}/rating`).push({ rating });
  };

  componentDidMount() {


    firebase
      .database()
      .ref(`/clubs/${this.props.id}/rating`)
      .on("value", (el) => {
        const rating = el.val();
        const values = Object.values(rating || {}).map((v) => v.rating);
        const avg =
          values.length === 0
            ? 0
            : values.reduce((result, next) => result + next, 0) / values.length;
        const avg1 = Math.round(avg * 10)/10
        this.setState({
          avg1
        })
      });

}

  render() {
    return (
      <>
        {" "}
        <Rating
          icon="star"
          defaultRating={3}
          maxRating={5}
          onRate={this.handleRate}
          disabled={this.state.disabled}
        />
        Ocena: {this.state.avg1} 
      </>
    );
  }
}

export default Rat;
