import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, ListView, TouchableOpacity  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, ListItem, Input } from '../common';

  let ertner = 0;

class AlkoDetails extends Component {

render(){
  return(
    <View>
      <CardSection>
        <Text>
          {this.props.item.name}
        </Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.item.description}
        </Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.item.availability}
        </Text>
      </CardSection>
      <CardSection>
        <Text>
          {this.props.item.cost}
        </Text>
      </CardSection>
      <CardSection>
        <TouchableOpacity onPress={() => {
            if(ertner > 0)
            {
              ertner --;
              this.forceUpdate();
            }
          }}>
          <Text style={{fontSize: 52, paddingLeft: 130}}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 52}}>
            {ertner}
        </Text>
        <TouchableOpacity onPress={() => {
            ertner ++;
            this.forceUpdate();
          }}>
          <Text style={{fontSize: 52}}>
            +
          </Text>
        </TouchableOpacity>
      </CardSection>
      <CardSection>
        <Button onPress={()=>{
            Actions.OrderView({quantity: ertner, item: this.props.item});
          }}>
          Dodaj do koszyka :)
        </Button>
      </CardSection>
    </View>
  );
}
}

export default AlkoDetails;
