import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Example from './components/Example';
import RegisterForm from './components/RegisterForm';
import FilterableOrderTable from './components/Orders/FilterableOrderTable';
import OrderDetails from './components/Orders/OrderDetails';
import ShopList from './components/Shops/FilterableShopTable';
import ShopDetails from './components/Shops/ShopDetails';

RouterComponent = () => {

  return(
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="register" component={RegisterForm} title="Please Register" />
      <Scene key="home" component={Home} title="Home Page" />
      <Scene key="example" component={Example} title="Example Page" />
      <Scene key="orders" component={FilterableOrderTable} title="Orders Page" />
      <Scene key="orderDetails" component={OrderDetails} title="Order Details" />
      <Scene key="shops" component={ShopList} title="Shop list" />
      <Scene key="shopDetails" component={ShopDetails} title="Shop Details" />
    </Router>
  );
};

export default RouterComponent;
