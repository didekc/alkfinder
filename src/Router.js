import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Example from './components/Example';
import RegisterForm from './components/RegisterForm';

RouterComponent = () => {

  return(
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="register" component={RegisterForm} title="Please Register" />
      <Scene key="home" component={Home} title="Home Page" />
      <Scene key="example" component={Example} title="Example Page" />
    </Router>
  );
};

export default RouterComponent;
