import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';

class OrderRow extends Component {
 constructor(props){
   super(props);
   this.onDeliveredPress = this.onDeliveredPress.bind(this);
   this.state = {
     order: this.props.order
   };
 }
  onPress(order){
    Actions.orderDetails({order: order});
  }


  onDeliveredPress = (order) => {
    console.log("OrderRow here ");
    this.state.order.delivered = !this.state.order.delivered;
    this.forceUpdate();
  }

  styler = () => {
    if(this.state.order.delivered)
    {
      return (
        {
          color: 'green',
        }
      )
    }else {
      return (
        {
          color: 'red'
        }
      )
    }
  }

  renderName = () => {
    if(this.state.order.delivered) {
      return(
        <Text style={{color: 'green'}}>{this.state.order.orderCode}</Text>
      )
  } else {
    return(
      <Text style={{color: 'red'}}>
        {this.state.order.orderCode}
      </Text>
    )
  }
}

renderDelivered = () => {
  if(this.state.order.delivered){
    return(
      <Text style={{color: 'green', fontWeight: 'bold'}}>V{'\n'}</Text>
    )
  }else {
    return (
      <Text style={{color: 'red', fontWeight: 'bold'}}>X{'\n'}</Text>
    )
  }
}

renderAddress = () => {
    return(
      <Text style={this.styler()}>{this.state.order.orderAddress}</Text>
    )
  }
  render() {

    return (
      <CardSection>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableHighlight onPress={()=> {this.onPress(this.state.order)}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
            {this.renderName()}
            {this.renderAddress()}
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> {this.onDeliveredPress(this.state.order)}}>
            {this.renderDelivered()}
          </TouchableHighlight>
        </View>
      </CardSection>
    );
  }
}export default OrderRow;
