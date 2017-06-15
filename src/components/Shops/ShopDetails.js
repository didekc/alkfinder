import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, ListItem } from '../common';

let ertner = 0;

class ShopDetails extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          shop: ""
      };
  }
  componentWillMount(){
    if(this.props.shop){
      this.setState({shop: this.props.shop});
      console.log(this.state.shop)
    }

  }
  render(){
    var items = this.state.shop.items;
    var rows = [];
    console.log(items);
    const chleb = _.map(items, (item) => {
       ertner ++;
     rows.push(<ListItem key={item + ertner} item={item} />);
    });
    return(
        <Card>
        <CardSection>
          <Text>Nazwa: {this.state.shop.name} </Text>
        </CardSection>
        <CardSection>
          <Text>Adres: {this.state.shop.address} </Text>
        </CardSection>
        <CardSection>
          <Text>Opis: {this.state.shop.description} </Text>
        </CardSection>
        <CardSection>
          <Text> {this.state.shop.availability} </Text>
        </CardSection>
        <CardSection>
            <Text> Alkohole: </Text>
        </CardSection>
        <CardSection>
          <Card>
            {rows}
          </Card>
        </CardSection>
    </Card>
    );
  }
}
export default ShopDetails;
