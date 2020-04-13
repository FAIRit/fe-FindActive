import React, { useState } from "react";
import { Rating } from "semantic-ui-react";

class Rat extends React.Component {
  state = {};

  handleRate = (e, { rating }) => this.setState({ rating });

  render() {
    return (
      <>
        {" "}
        <Rating
          icon="star"
          defaultRating={3}
          maxRating={5}
          onRate={this.handleRate}
        />
        <div>{this.state.rating}</div>
      </>
    );
  }
}

export default Rat;
