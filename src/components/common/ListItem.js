import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './index';

class ListItem extends Component {

  render(){
    return (
      <TouchableWithoutFeedback onPress={()=> {Actions.AlkoDetails({item: this.props.item})}}>
        <View>
          <CardSection>
            <Text>
              {this.props.item.name}
              {'\t'}
              cena:
              {this.props.item.cost}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}



export {ListItem};
