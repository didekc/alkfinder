import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import ShopRow from './ShopRow';

  let ertner = 0;

class ShopTable extends Component {

  render() {
    var rows = [];
    var shops = this.props.shops;
    var searched = this.props.filterText.toUpperCase();
          const chleb = _.map(shops, (shop) => {
           if(shop.name.toUpperCase().indexOf(searched)!==-1){
             console.log(shop.name);
             ertner ++;
           rows.push(<ShopRow key={shop + ertner} shop={shop} />);
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
