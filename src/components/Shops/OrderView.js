import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, ListItem } from '../common';
import OrderRow from './OrderRow';

let totalCost=0;

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

  componentWillUnmount()
  {
  }

  renderButton() {
    return(
      <CardSection>
        <Button onPress={this.handleOrder.bind(this)}>
          Kup teraz :)
        </Button>
      </CardSection>
    );
  }
  handleOrder(){
    // this.setState({totalCost: totalCost});
    Actions.confirmOrder({cart: this.state.cart, totalCost: totalCost});
  }

  renderOrderList(){
    let rows = [];
    totalCost = 0;
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
  //this.setState({totalCost: totalCost});
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
            {this.renderButton()}
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
