import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
  state = { email: '',
  password: '',
  error: '',
  loading: false,
  loggedIn: false
 };
 // componentWillUpdate(nextProps, nextState){
 //    if (nextState.loggedIn == true && this.state.loggedIn == false) {
 //      Actions.Home();
 //    }
 // }
  onButtonPress(){
    const { email, password } = this.state;

    this.setState({erorr:'', loading: true})

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch ( this.onLoginFail.bind(this));

  }
  onLoginFail() {
    this.setState({ error:'Authentication Failed', loading: false})
  }
  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      loggedIn: true
    });
    this.onLoggedIn();
  }
  onLoggedIn(){
    Actions.home({info: "Zalogowano pomyślnie"});
  }

  onRegisterButtonPress(){
    Actions.register();
  }

  renderButton() {
    if(this.state.loading) {
      return (<Text></Text>);
    }
    return(
    <Button onPress={this.onButtonPress.bind(this)}>
      Zaloguj
    </Button>
  );
}
renderRegisterButton() {
   if(this.state.loading) {
      return <Spinner size = {'large'} />;
    }
    return(
    <Button onPress={this.onRegisterButtonPress.bind(this)}>
      Nie mam konta
    </Button>
  );
}
  render () {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder = "user@gmail.com"
          label = 'Email'
          value = {this.state.email}
          onChangeText = {email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder = "password"
            label = "Password"
            value = {this.state.password}
            onChangeText = {password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <CardSection>
          {this.renderRegisterButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
}
export default LoginForm;
