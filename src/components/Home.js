import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Card, CardSection, Button } from './common';



class Home extends Component {
  constructor() {
      super();
      var ref = firebase.database().ref(`/roles`);
    const {currentUser} = firebase.auth();

      };
  // componentDidMount() {

  //   shops.on('value', snapshot => {
  //     this.setState({shops: snapshot.val()});
  //
  //   });
  // }
  // componentDidMount(){
  //   // var role = firebase.database().ref(`/roles`);
  //   //   role.on('value', snapshot => {
  //   //   console.log(role);
  //   })
  //     ;
  // }

  componentDidMount(){
    this.setState({
      userID: firebase.auth().currentUser.uid
    })
  }


  onButtonSeeOrdersPress(){
    Actions.orders();
  }

  onButtonSeeShopsPress(){
    Actions.shops();
  }

  onButtonSeeChartPress(){
    Actions.OrderView();
  }
  //e4uLspKOnJczfluYIncBZcYiGpb2

  renderContent()
  {if(firebase.auth()){
    console.log("here"+this.currentUser);
    if( false){
      return(
          <Card>
            <CardSection>
            <Text style={{ fontSize: 20, color: 'blue' }}>  Zalogowano pomyślnie </Text>
            </CardSection>
            <CardSection>
              <Button style={{ backgroundColor: 'red' }} onPress={this.onButtonSeeOrdersPress.bind(this)}>
                Zamówienia
              </Button>
            </CardSection>
          </Card>
      );

    }else {
      return(
          <Card>
            <CardSection>
            <Text style={{ fontSize: 20, color: 'blue' }}>  Zalogowano pomyślnie </Text>
            </CardSection>
            <CardSection>
              <Button style={{ backgroundColor: 'red' }} onPress={this.onButtonSeeChartPress.bind(this)}>
                Koszyk
              </Button>
            </CardSection>
            <CardSection>
              <Button style={{ backgroundColor: 'red' }} onPress={this.onButtonSeeShopsPress.bind(this)}>
                Złóż zamówienie
              </Button>
            </CardSection>
          </Card>
        );
    }
  }

  }

  render(){
    return(
      <View>
        {this.renderContent()}
      </View>
    );
  }
}
export default Home;
