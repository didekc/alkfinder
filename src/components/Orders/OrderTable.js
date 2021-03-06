import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import OrderRow from './OrderRow';
class OrderTable extends Component {
  constructor(props){
      super(props);
  }

  render() {
    var rows = [];
    var searched = this.props.filterText.toUpperCase();
    if(this.props.orders){
      console.log(this.props.orders);
      this.props.orders.forEach(function(order) {
        var address = order.orderAddress.toUpperCase();
        if(address.indexOf(searched)!==-1){
          rows.push(<OrderRow order={order} key={order.orderCode}/>);
        }
      });
    }
    return (
     <Card>
        <Card>
            <CardSection>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                    <Text>
                        Kod zamowienia
                    </Text>
                    <Text>
                        Adres
                    </Text>
                    <Text>
                        Status
                    </Text>
                </View>
            </CardSection>
        </Card>
        <Card>
            {rows}
        </Card>
    </Card>
    );
  }
}export default OrderTable;
