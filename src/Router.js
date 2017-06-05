import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Example from './components/Example';
import RegisterForm from './components/RegisterForm';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';
import ShopList from './components/ShopList';
import ShopDetails from './components/ShopDetails';

RouterComponent = () => {

  return(
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="register" component={RegisterForm} title="Please Register" />
      <Scene key="home" component={Home} title="Home Page" />
      <Scene key="example" component={Example} title="Example Page" />
      <Scene key="orders" component={OrderList} title="Orders Page" />
      <Scene key="orderDetails" component={OrderDetails} title="Order Details" />
      <Scene key="shops" component={ShopList} title="Shop list" />
      <Scene key="shopDetails" component={ShopDetails} title="Shop Details" />
    </Router>
  );
};

export default RouterComponent;
