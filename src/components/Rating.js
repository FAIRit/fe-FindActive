import React from "react";
import { Rating } from "semantic-ui-react";
import firebase from '../firebase/firebase'

class Rat extends React.Component {
  state = {
    disabled: false,
  };

  handleRate = (e, { rating }) => this.setState({ rating, disabled: true });

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
        Ocena: {this.state.rating} {this.props.id}
      </>
    );
  }
}

export default Rat;
