import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
class OrderRow extends Component {
  onPress(order){
    Actions.orderDetails({order: order});
  }

  render() {
    var name = this.props.order.delivered ?
      this.props.order.orderCode :
      <Text style={{color: 'grey'}}>
        {this.props.order.orderCode}
      </Text>;
    var delivered = this.props.order.delivered ? <Text>X</Text> : <Text>V</Text>;
    return (
    <TouchableHighlight onPress={()=> {this.onPress(this.props.order)}}>
      <View>
        <CardSection>
          {name}
          <Text>{this.props.order.orderAddress}</Text>
          {delivered}
          <Text>{'\n'}</Text>
        </CardSection>
      </View>
    </TouchableHighlight>
    );
  }
}export default OrderRow;