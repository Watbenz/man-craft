import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login'
import RequirementBoard from './src/screens/RequirementBoard'
import Profile from './src/screens/Profile'

export default class App extends Component {
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
  Profile: Profile
});

const AppContainer = createAppContainer(RootStack);