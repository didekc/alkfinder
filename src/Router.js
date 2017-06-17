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
import AlkoDetails from './components/Shops/AlkoDetails';
import OrderView from './components/Shops/OrderView';

RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Zaloguj się" />
      <Scene key="home" component={Home} title="Strona głowna" />
      <Scene key="register" component={RegisterForm} title="Zarejestruj się" />
      <Scene key="AlkoDetails" component={AlkoDetails} title="Szczegóły alkoholu" />
      <Scene key="example" component={Example} title="Example Page" />
      <Scene key="orders" component={FilterableOrderTable} title="Zamówienia" />
      <Scene key="orderDetails" component={OrderDetails} title="Szczegóły zamówienia" />
      <Scene key="shops" component={ShopList} title="Lista sklepów" />
      <Scene key="shopDetails" component={ShopDetails} title="Szczegóły sklepu" />
      <Scene key="OrderView" component={OrderView} title="Koszyk" />
    </Router>
  );
};

export default RouterComponent;
