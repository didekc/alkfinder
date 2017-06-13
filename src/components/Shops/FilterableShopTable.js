import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import ShopTable from './ShopTable';
import SearchShopBar from './SearchShopBar';

const SHOPS = [
      {shopId: 1, shopName: 'aaa', shopAddress: 'ul. Ata 1 11-111 Wrocław'},
      {shopId: 2, shopName: 'bbb', shopAddress: 'ul. Beta 2 22-222 Wrocław'},
      {shopId: 3, shopName: 'ccc', shopAddress: 'ul. Ceta 3 33-333 Wrocław'},
      {shopId: 4, shopName: 'ddd', shopAddress: 'ul. Deta 4 44-444 Wrocław'}
  ];

class FilterableShopTable extends Component {
  constructor(){
      super();
      this.state = { 
          shops: SHOPS,
          filterText: '' 
      };
      this.handleFilterTextInput=this.handleFilterTextInput.bind(this);
  }

    handleFilterTextInput(filterText) {
        this.setState({
        filterText: filterText
        });
    }

  render(){
    return(
        <Card>
            <SearchShopBar 
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}/>
            <ShopTable shops={this.state.shops} filterText={this.state.filterText}/>
        </Card>
    );
  }
}
export default FilterableShopTable;
