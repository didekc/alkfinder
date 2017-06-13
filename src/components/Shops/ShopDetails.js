import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from '../common';

const alkos = [
      {alkoId: 1, alkoName: 'aaa', alkoPrice: '1000000000'},
      {alkoId: 2, alkoName: 'bbb', alkoPrice: '1'},
      {alkoId: 3, alkoName: 'ccc', alkoPrice: '0,01'},
      {alkoId: 4, alkoName: 'ddd', alkoPrice: '0'}
  ]

class ShopDetails extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          alkoDataSource: ds.cloneWithRows(alkos)
      };
  } 

  renderRow(alko, sectionId, rowId, highlightRow){
    return (
    <View>
        <CardSection>
            <Text>Nazwa: {alko.alkoName}, Cena: {alko.alkoPrice}</Text>
        </CardSection>
    </View>
    );
}
  
  render(){
    return(
        <Card>
        <CardSection>
          <Text> {this.props.shop.shopName} </Text>
        </CardSection>
        <CardSection>
          <Text> {this.props.shop.shopAddress} </Text>
        </CardSection>
        <CardSection>
            <Text> Alkohole: </Text>
        </CardSection>
        <CardSection>
          <ListView 
            dataSource = {this.state.alkoDataSource}
            renderRow = {this.renderRow.bind(this)}
            /> 
        </CardSection>
    </Card>
    );
  }
}
export default ShopDetails;
