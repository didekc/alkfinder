import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import ShopTable from './ShopTable';
import SearchShopBar from './SearchShopBar';


class FilterableShopTable extends Component {
  constructor(){
      super();
      this.state = {
          shops: [],
          filterText: ''
      };
      this.handleFilterTextInput=this.handleFilterTextInput.bind(this);
  }

  componentDidMount() {
    var shops = firebase.database().ref(`/shops`);
    shops.on('value', snapshot => {
      this.setState({shops: snapshot.val()});
    });
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
