import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, ListItem } from '../common';



class OrderView extends Component {
  constructor() {
      super();
      this.state = {
        item: "",
        quantity: "",
        toJaHere: ""
      };
      const  { currentUser } = firebase.auth();
  }
  componentWillMount(){
    console.log( this.props.quantity);
    this.setState({
      item: this.props.item,
      quantity: this.props.quantity,
      toJaHere: this.currentUser
    })
  }
  handleOrder (){

  }

  summary () {
  let suma = (Number(this.props.quantity) * Number(this.props.item.cost)).toFixed(2);
  return(
        <Text>
          cena: {suma}
        </Text>
  )
  }

  render(){
    return(
        <Card>
        <CardSection>
          <Text>Nazwa: {this.state.item.name} </Text>
        </CardSection>
        <CardSection>
          <Text>
         {this.summary()}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleOrder.bind(this)}>
            Kup teraz :)
          </Button>
        </CardSection>
    </Card>
    );
  }
}
export default OrderView;
