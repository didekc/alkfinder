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
      <Text style={{color: 'green'}}>{this.props.order.orderCode}</Text> :
      <Text style={{color: 'red'}}>
        {this.props.order.orderCode}
      </Text>;
    var address = this.props.order.delivered ?
      <Text style={{color: 'green'}}>{this.props.order.orderAddress}</Text> :
      <Text style={{color: 'red'}}>
        {this.props.order.orderAddress}
      </Text>;
    var delivered = this.props.order.delivered ? 
    <Text style={{color: 'green', fontWeight: 'bold'}}>V{'\n'}</Text> : 
    <Text  style={{color: 'red', fontWeight: 'bold'}}>X{'\n'}</Text>;
    
    return (
    <TouchableHighlight onPress={()=> {this.onPress(this.props.order)}}>
      <View>
        <CardSection>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
            {name}   
            {address}
            {delivered}
          </View>
        </CardSection>
      </View>
    </TouchableHighlight>
    );
  }
}export default OrderRow;