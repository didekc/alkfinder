import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
class ShopRow extends Component {
  onPress(shop){
    Actions.shopDetails({shop: shop});
  }

  render() {
    var name = this.props.shop.shopName;
    var address = this.props.shop.shopAddress;
    return (
    <TouchableHighlight onPress={()=> {this.onPress(this.props.shop)}}>
      <View>
        <CardSection>
          <Text>{name}</Text>
          <Text>{address}</Text>
          <Text>{'\n'}</Text>
        </CardSection>
      </View>
    </TouchableHighlight>
    );
  }
}export default ShopRow;