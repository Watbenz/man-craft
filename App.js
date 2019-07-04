import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login'
import RequirementBoard from './src/screens/RequirementBoard'
import Profile from './src/screens/Profile'
import Item from './src/screens/Item'
import "firebase/database";
import firebase from 'firebase';
import { Navigation } from 'react-native-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);

    const firebaseConfig = {
      apiKey: "AIzaSyAiGvQYm5vFo2Uz_xVt_8N_yoiN7Yk8iwQ",
      authDomain: "mancraft-project.firebaseapp.com",
      databaseURL: "https://mancraft-project.firebaseio.com",
      projectId: "mancraft-project",
      storageBucket: "mancraft-project.appspot.com",
      messagingSenderId: "68514267415",
      appId: "1:68514267415:web:b594d24bbd59aa96"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  RequirementBoard: RequirementBoard,
  Profile: Profile,
  Item: Item,
});

const AppContainer = createAppContainer(RootStack);