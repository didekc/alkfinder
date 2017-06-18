import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../common';

class OrderRow extends Component {
  render() {
    const { name, quantity } = this.props;
    return (
      <View>
        <CardSection>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{name}</Text>
            <Text>{quantity}{'\n'}</Text>
            </View>
        </CardSection>
      </View>
    );
  }
}export default OrderRow;
