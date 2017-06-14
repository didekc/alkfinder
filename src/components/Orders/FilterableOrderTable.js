import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Card, CardSection, Input, Button } from '../common';
import OrderTable from './OrderTable';
import SearchOrderBar from './SearchOrderBar';

var ORDERS = [
      {orderCode: '111   ', orderAddress: 'ul. Pierwsza 1 11-111 Wrocław', delivered: false},
      {orderCode: '222', orderAddress: 'ul. Druga 2 22-222 Wrocław', delivered: true},
      {orderCode: '333', orderAddress: 'ul. Trzecia 3 33-333 Wrocław', delivered: false},
      {orderCode: '444', orderAddress: 'ul. Czwarta 4 44-444 Wrocław', delivered: false}
  ];

class FilterableOrderTable extends Component {
  constructor(){
      super();
      this.state = {
          orders: ORDERS,
          filterText: ''
      };
      this.handleFilterTextInput=this.handleFilterTextInput.bind(this);
      this.handleChangeDeliveryState=this.handleChangeDeliveryState.bind(this);
  }

    handleFilterTextInput(filterText) {
        this.setState({
        filterText: filterText
        });
    }

    handleChangeDeliveryState(order) {
      console.log("FilterableOrderTable here ");
        for(let i in ORDERS){
            if(ORDERS[i].orderCode === order.orderCode){
                ORDERS[i].delivered = !ORDERS[i].delivered;
                break;
            }
        }
        this.setState({ORDERS});
    }

  render(){
    return(
        <Card>
            <SearchOrderBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}/>
            <OrderTable
            orders={this.state.orders}
            filterText={this.state.filterText}
        />
            </Card>
    );
  }
}
export default FilterableOrderTable;
