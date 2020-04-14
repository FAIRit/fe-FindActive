import React from "react";
import { Rating } from "semantic-ui-react";
import firebase from "../firebase/firebase";

class Rat extends React.Component {
  state = {
    disabled: false,
  };

  handleRate = (e, { rating }) => {
    this.setState({
      rating,
    });
    firebase.database().ref(`/clubs/${this.props.id}/rating`).push({ rating });
  };

  displayRating = () => {
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
        console.log(avg1)
        console.log(avg1)
      });
  };

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
          onClick={this.displayRating}
        />
        Ocena: {this.props.id}
      </>
    );
  }
}

export default Rat;
