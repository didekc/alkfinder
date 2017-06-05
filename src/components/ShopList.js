import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

const shops = [
      {shopId: 1, shopName: 'aaa', shopAddress: 'ul. Ata 1 11-111 Wrocław'},
      {shopId: 2, shopName: 'bbb', shopAddress: 'ul. Beta 2 22-222 Wrocław'},
      {shopId: 3, shopName: 'ccc', shopAddress: 'ul. Ceta 3 33-333 Wrocław'},
      {shopId: 4, shopName: 'ddd', shopAddress: 'ul. Deta 4 44-444 Wrocław'}
  ]

class ShopList extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          shopDataSource: ds.cloneWithRows(shops)
      };
  }

onPress(shop){
    Actions.shopDetails({shop: shop});
}
  
renderRow(shop, sectionId, rowId, highlightRow){
    return (
    <TouchableHighlight onPress={()=> {this.onPress(shop)}}>
        <View>
            <CardSection>
                <Text>Nazwa sklepu: {shop.shopName}, Adres: {shop.shopAddress}</Text>
            </CardSection>
        </View>
     </TouchableHighlight>
    );
}

  render(){
    return(
        <Card>
            <CardSection>
                <Text> Lista sklepów: </Text>
            </CardSection>
            <CardSection>
                <ListView 
                dataSource = {this.state.shopDataSource}
                renderRow = {this.renderRow.bind(this)}
                />
            </CardSection>
        </Card> 
    );
  }
}
export default ShopList;
