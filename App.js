import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  { createStackNavigator }  from 'react-navigation';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const config = {
  apiKey: 'AIzaSyBwXeEZzh73_DZor_HWol3NcG3A3uVvEHk',
  authDomain: 'authentication-6b78c.firebaseapp.com',
  databaseURL: 'https://authentication-6b78c.firebaseio.com',
  projectId: 'authentication-6b78c',
  storageBucket: 'authentication-6b78c.appspot.com',
  messagingSenderId: '1089803642840'
};

const app = firebase.initializeApp(config);
export const db = app.database();

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }
  
  export default App;