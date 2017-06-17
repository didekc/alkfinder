import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
class SearchShopBar extends Component {
  constructor(props){
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange = (data) => {
    this.props.onFilterTextInput(data);
  }

  render(){
    return(
        <Card>
            <CardSection>
            <Input
            placeholder = "Szukaj..."
            label = 'Nazwa:'
            value = {this.props.filterText}
            onChangeText={this.handleFilterTextInputChange}
            />
            </CardSection>
        </Card>
    );
  }
}export default SearchShopBar;
