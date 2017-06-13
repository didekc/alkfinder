import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
class OrderRow extends Component {
 constructor(props){
   super(props);
   this.onDeliveredPress = this.onDeliveredPress.bind(this);

 }
  onPress(order){
    Actions.orderDetails({order: order});
  }

  onDeliveredPress(order){
    this.props.onDeliveredState(order);
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
      <CardSection>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
          <TouchableHighlight onPress={()=> {this.onPress(this.props.order)}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
            {name}   
            {address}
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> {this.onDeliveredPress(this.props.order)}}>
            {delivered}
          </TouchableHighlight>
        </View>
      </CardSection>
    );
  }
}export default OrderRow;