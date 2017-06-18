import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Card, CardSection, Button } from './common';

class Home extends Component {
  constructor() {
      super();
     this.state = {
       user:{},
       uid: 0,
       isProvider: false
     }
      };
  componentWillMount(){
    let getUser = setInterval(() => {
        if ( firebase.auth().currentUser !== null ) {
            clearInterval(getUser);
            let user = firebase.auth().currentUser;
            let uid = user.uid;
            this.setState({uid, user});
            this.getUserRole();
        } else {
          console.log('Wait for it');
        }
      }, 500);
  }

  // componentDidMount(){
  //
  // }

  getUserRole(){
    var id = this.state.uid;
    var role = firebase.database().ref(`/roles/${id}`);
      role.on('value', snapshot => {
        this.setState({isProvider: snapshot.val().isprovider});
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
  renderContent()
  {
      if(this.state.isProvider){
        return(
            <Card>
              <CardSection>
              <Text style={{ fontSize: 20, color: 'green' }}>  Zalogowano pomyślnie </Text>
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
              <Text style={{ fontSize: 16, color: 'green' }}>  {this.props.info} </Text>
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
  render(){
    return(
      <View>
        {this.renderContent()}
      </View>
    );
  }
}
export default Home;
