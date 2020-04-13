import React from "react";
import { Rating } from "semantic-ui-react";

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
        Ocena: {this.state.rating}
      </>
    );
  }
}

export default Rat;
