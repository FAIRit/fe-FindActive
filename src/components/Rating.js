import React from "react";
import { Rating } from "semantic-ui-react";
import firebase from "../firebase/firebase";

class Rat extends React.Component {
  state = {
    avgRounded: "",
  };

  handleRate = (e, { rating }) => {
    this.setState({
      rating,
      aa: 4,
    });
    firebase.database().ref(`/clubs/${this.props.id}/rating`).push({ rating });
    // firebase.auth().onAuthStateChanged((user) => {
    //  const ref = firebase.database().ref(`/clubs/${this.props.id}/ratedBy`).set(user.uid)
    // })
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
        const avgRounded = Math.round(avg * 10) / 10;
        this.setState({
          avgRounded,
        });
      });
  }

  render() {
    return (
      <>
        {" "}
        <Rating
          icon="star"
          defaultRating={5}
          maxRating={5}
          onRate={this.handleRate}
          disabled={this.state.disabled}
        />
        Ocena: {this.state.avgRounded}
      </>
    );
  }
}

export default Rat;
