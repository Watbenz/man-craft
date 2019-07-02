import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login'
import RequirementBoard from './screens/RequirementBoard'
import Profile from './screens/Profile'

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