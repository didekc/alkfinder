import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

const orders = [
      {orderCode: '111', orderAddress: 'ul. Pierwsza 1 11-111 Wrocław'},
      {orderCode: '222', orderAddress: 'ul. Druga 2 22-222 Wrocław'},
      {orderCode: '333', orderAddress: 'ul. Trzecia 3 33-333 Wrocław'},
      {orderCode: '444', orderAddress: 'ul. Czwarta 4 44-444 Wrocław'}
  ]

class OrderList extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          orderDataSource: ds.cloneWithRows(orders)
      };
  }

onPress(order){
    Actions.orderDetails({order: order});
}
  
renderRow(order, sectionId, rowId, highlightRow){
    return (
    <TouchableHighlight onPress={()=> {this.onPress(order)}}>
        <View>
            <CardSection>
                <Text>Kod zamówienia: {order.orderCode}, Adres: {order.orderAddress}</Text>
            </CardSection>
        </View>
     </TouchableHighlight>
    );
}

  render(){
    return(
        <Card>
            <CardSection>
                <Text> Lista zamówień: </Text>
            </CardSection>
            <CardSection>
            <ListView 
            dataSource = {this.state.orderDataSource}
            renderRow = {this.renderRow.bind(this)}
            /> 
            </CardSection>
        </Card>
    );
  }
}
export default OrderList;
