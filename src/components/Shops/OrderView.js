import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, ListItem } from '../common';
import OrderRow from './OrderRow';

class OrderView extends Component {
  constructor(){
      super();
      this.state = {
        item: "",
        quantity: "",
        cart: [],
        totalCost: 0
      };
  }
  componentWillMount(){
    const { currentUser } = firebase.auth();
    let cartRef = firebase.database().ref(`/carts/${currentUser.uid}`);

    cartRef.once('value').then((snapshot) => {
      if(snapshot.val())
      {
        this.setState({cart: snapshot.val().cart})
      }
    })
    .then(() => {
      console.log(this.state.cart);
    });
  }
  // componentWillMount(){
  //   console.log( this.props.quantity);
  //   this.setState({
  //     item: this.props.item,
  //     quantity: this.props.quantity,
  //     toJaHere: this.currentUser
  //   })
  // }
  handleOrder(){

  }

  // return(<CardSection>
  //     <Text>Nazwa: {this.props.item.name} </Text>
  //   </CardSection>
  //   <CardSection>
  //     <Text>
  //    {this.summary()}
  //     </Text>
  //   </CardSection>
  //   <CardSection>
  //     <Button onPress={this.handleOrder.bind(this)}>
  //       Kup teraz :)
  //     </Button>
  //   </CardSection>
  // );
  renderOrderList(){
    let rows = [];
    let totalCost = 0;
    let cart = this.state.cart;
    let key = 0;
    if(cart.indexOf()){
      let chleb = _.map(cart, (item) => {
        key ++;
        if(item.element.item.availability !== "Brak"){
          rows.push(<OrderRow key={key} name={item.element.item.name} quantity={item.element.quantity}/>);
        totalCost += Number(item.element.quantity) * Number(item.element.item.cost);
        }
    })
  }
  console.log(totalCost);
      if(0 < rows.length)
      {
        return(
          <Card>
            {rows}
            <CardSection>
              <Text>
                Cena: {totalCost}
              </Text>
            </CardSection>
          </Card>
        );
      }else{
        return(
          <Card>
            <CardSection>
              <Text>
                Koniecznie coś zamów!
              </Text>
            </CardSection>
          </Card>
        );
      }
  }


  render(){
    return(
        <Card>
          {this.renderOrderList()}
        </Card>
    );
  }
}
export default OrderView;
