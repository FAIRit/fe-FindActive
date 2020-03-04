import React from "react";
import { displayClubs, stopClubs } from '../services/ClubService'

// const ProductPage = ({match}) => {
//   return(
//     <div>{match.params.id}</div>
//   )
// }

// export default ProductPage;



class ProductPage extends React.Component{
  constructor(props){
      super(props)
      this.state={
         list:[],
         id:this.props.match.params.id,
         product:""
      }
  }
  componentDidMount(){
      displayClubs(list => {
          this.setState({product:list.find(product=>product.id===this.state.id)})})
  }
  componentWillUnmount(){
      stopClubs();
  }

  render(){
      return (
        <div>
          {this.state.product.name}
        </div>
      )
  }}

  export default ProductPage