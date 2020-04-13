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

  //   displayRating = () => {
  //     firebase.database().ref(`/clubs/${this.props.id}/rating`).once('value', function(snapshot) {
  //        return snapshot
  //     })

  //   }

  displayRating = () => {
      const arr = []
 firebase
      .database()
      .ref(`/clubs/${this.props.id}/rating`)
     .on('value', el => {
         el.forEach(val => {
             val.filter(ee => {
                //  console.log(ee.val())
                //  arr.push(ee.val())
                //  console.log(arr)
                console.log (ee.val())
             })
         })
     })
  };


// displayRating = () => {
//     firebase.database().ref(`/clubs/${this.props.id}/rating`).on('value', el =>{
//         console.log(el)
//     })
// }


  //   var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
  // starCountRef.on('value', function(snapshot) {
  //   updateStarCount(postElement, snapshot.val());
  // });

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
        Ocena: {this.displayRating}  {this.props.id}
      </>
    );
  }
}

export default Rat;
