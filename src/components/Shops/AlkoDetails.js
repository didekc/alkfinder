import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Card, CardSection, Button, ListItem, Input } from '../common';

  let ertner = 0;
  let cart = [];

class AlkoDetails extends Component {
  state = {
    quantity: '',
    item: this.props.item,
    orderList: []
  }

  addToCart(){
    let element = {};
    element.item = this.props.item;
    element.quantity = ertner;
    cart.push({element});
    const {currentUser} = firebase.auth();
    this.setState({
       quantity: ertner,
       orderList: cart
     })
    firebase.database().ref(`/carts/${currentUser.uid}`)
    .set({cart})
    .then( () => {
      ertner = 0;
      this.forceUpdate();
      Actions.pop();
    });
  }

render(){
  return(
    <View>
      <CardSection>
        <Text>
          {this.props.item.name}
        </Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.item.description}
        </Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.item.availability}
        </Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.item.cost}
        </Text>
      </CardSection>
      <CardSection>
        <TouchableOpacity onPress={() => {
            if(ertner > 0)
            {
              ertner --;
              this.forceUpdate();
            }
          }}>
          <Text style={{fontSize: 52, paddingLeft: 130}}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 52}}>
            {ertner}
        </Text>
        <TouchableOpacity onPress={() => {
            ertner ++;
            this.forceUpdate();
          }}>
          <Text style={{fontSize: 52}}>
            +
          </Text>
        </TouchableOpacity>
      </CardSection>
      <CardSection>
        <Button onPress={this.addToCart.bind(this)}>
          Dodaj do koszyka :)
        </Button>
      </CardSection>
    </View>
  );
}
}

export default AlkoDetails;
