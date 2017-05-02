import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp (
     {apiKey: "AIzaSyArNDr3iEKVkojhSbwElXubYmKR1SoR51k",
     authDomain: "alkofinder-f5db9.firebaseapp.com",
     databaseURL: "https://alkofinder-f5db9.firebaseio.com",
     projectId: "alkofinder-f5db9",
     storageBucket: "alkofinder-f5db9.appspot.com",
     messagingSenderId: "148561987758"}
 );

  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
