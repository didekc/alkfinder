import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import ShopRow from './ShopRow';
class ShopTable extends Component {
  render() {
    var rows = [];
    var searched = this.props.filterText.toUpperCase();
    this.props.shops.forEach(function(shop) {
      var name = shop.shopName.toUpperCase();
      if(name.indexOf(searched)!==-1){
        rows.push(<ShopRow shop={shop} key={shop.shopId} />);
      }
    });
    return (
     <Card>
        <Card>
            <CardSection>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                    <Text>
                        Nazwa
                    </Text>
                    <Text>
                        Adres
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
}export default ShopTable;