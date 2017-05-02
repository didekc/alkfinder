import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class Home extends Component {
  onButtonPress(){
    Actions.example();
  }
  render(){
    return(
        <Card>
          <CardSection>
          <Text style={{ fontSize: 20, color: 'red' }}>  brawo, zalogowales sie </Text>
          </CardSection>
          <CardSection>
            <Button style={{ backgroundColor: 'red' }} onPress={this.onButtonPress.bind(this)}>
              teleportuj mnie !
            </Button>
          </CardSection>
        </Card>
    );
  }
}
export default Home;
