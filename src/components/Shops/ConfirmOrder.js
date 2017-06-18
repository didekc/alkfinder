import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { CardSection, Button, Input } from '../common';

let order = [];

class ConfirmOrder extends Component {
  constructor(){
      super();
      this.state = {
        adress: "",
        order: ""
      };
  }
//  {cart: this.state.cart, totalCost: this.state.totalCost

  handleSendOrder(){
    console.log("wysylam");
    let element = {};
    element.item = this.props.cart;
    element.totalCost = this.props.totalCost;
    element.address = this.state.adress;
    element.status = "Niedostarczone";
    console.log(element);
    order.push({element});
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/orders/${currentUser.uid}`)
    .set({order})
    .then( () => {
      this.forceUpdate();
      firebase.database().ref(`/carts/${currentUser.uid}`).remove()
    })
    .then( () => {
      Actions.home({info: "Twoje zamówienie zostało przekazane!"});
    });
  }

  render() {
    const { name, quantity } = this.props;
    return (
      <View>
        <CardSection>
          <Text>
            Wprowadź adres i kliknij zamawiam!
          </Text>
        </CardSection>
        <CardSection>
          <Input
          placeholder = "np Fiołkowa 19/7"
          label = 'Adres'
          value = {this.state.adress}
          onChangeText = {adress => this.setState({ adress })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSendOrder.bind(this)}>
            Kup teraz :)
          </Button>
        </CardSection>
      </View>
    );
  }
}export default ConfirmOrder;
