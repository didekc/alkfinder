import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../common';

class OrderDetails extends Component {
  render(){
    return(
        <Card>
        <CardSection>
          <Text> Szczegóły zamówienia: </Text>
        </CardSection>

        <CardSection>
          <Text> Numer zamówienia: {this.props.order.orderCode} </Text>
        </CardSection>
        <CardSection>
          <Text> Adres zamówienia: {this.props.order.orderAddress} </Text>
        </CardSection>
        <CardSection>
          <Text> A tu będzie mapka choćby nie wiem co! </Text>
        </CardSection>
      </Card>
    );
  }
}
export default OrderDetails;
