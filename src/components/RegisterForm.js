import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class RegisterForm extends Component {
  state = { email: '',
  password: '',
  passwordRepeat: '',
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
    Actions.login();
  }

  onRegisterButtonPress(){
    const { email, password, passwordRepeat } = this.state;

    this.setState({erorr:'', loading: true})

    if(this.state.password === this.state.passwordRepeat){
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onRegisterSuccess.bind(this))
        .catch ( this.onRegisterFail.bind(this));
    }
  }

  onRegisterFail() {
    this.setState({ error:'Authentication Failed', loading: false})
  }
  onRegisterSuccess(){
    this.setState({
      email: '',
      password: '',
      passwordRepeat: '',
      loading: false,
      error: '',
      loggedIn: true
    });
    this.onLoggedIn();
  }
  onLoggedIn(){
    console.log("blisko");
    Actions.home();
  }


  renderButton() {
    if(this.state.loading) {
      return <Spinner size = {'small'} />;
    }
    console.log(this.state.loggedIn);
    return(
    <Button onPress={this.onButtonPress.bind(this)}>
      Log in
    </Button>
  );
}
renderRegisterButton() {
   if(this.state.loading) {
      return <Spinner size = {'small'} />;
    }
    console.log(this.state.loggedIn);
    return(
    <Button onPress={this.onRegisterButtonPress.bind(this)}>
      Register
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
        <CardSection>
          <Input
            secureTextEntry
            placeholder = "password"
            label = "Repeat Password"
            value = {this.state.passwordRepeat}
            onChangeText = {passwordRepeat => this.setState({ passwordRepeat })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
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
export default RegisterForm;
