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
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text>{name}</Text>
            <Text>{address}{'\n'}</Text>
            </View>
        </CardSection>
      </View>
    </TouchableHighlight>
    );
  }
}export default ShopRow;