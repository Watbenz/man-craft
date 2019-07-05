import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import RequirementBoard from './src/screens/RequirementBoard';
import Profile from './src/screens/Profile';
import Item from './src/screens/Item';
import ChooseCatagory from './src/screens/ChooseCategory';
import UserRequirement from './src/model/UserRequirement';
import Customer from './src/model/Customer';
import Hatform from './src/form/HatForm';
import BasketForm from './src/form/BasketForm';
import "firebase/database";
import firebase from 'firebase';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const customerTest = [
  new Customer('Somchai', 'admin', 'somchai@hotmail.com'),
  new Customer('Wanna', '1234', 'wannaza@hotmail.com'),
  new Customer('Samorn', 'devcamp#7', 'kitty2562@hotmail.com')
];

const userCustomerTest = [
  new UserRequirement('Somchai', 'ตระกร้าสาน', 'ตระกร้า', 10, 10, 'black'),
  new UserRequirement('Somchai', 'เสื้อขนสัตว์', 'เสื้อ'),
  new UserRequirement('Somchai', 'หมวกไหมพรม', 'หมวก'),
  new UserRequirement('Samorn', 'หมวกไหมพรม', 'เครื่องนุ่งห่ม')
];

for (let i=0; i<3; i++) {
  customerTest[0].order.push(userCustomerTest[i]);
}



let obj = {
  customer: customerTest,
  userReq: userCustomerTest,
  dataAt: -1
}

const mapStateToProp = (state) => {
  return {
    userReq: state.user.userReq,
    customer: state.user.customer,
    dataAt: state.user.dataAt
  };

};

function userReqReducer(state = obj, action) {
  newState = state;
  switch (action.type) {
    case 'ADD_USERREQ':
      newState.userReq = [...state.userReq, action.payload];
      break;
    case 'SET_DATA_INDEX':
      newState.dataAt = action.payload;
      break;
    case 'SET_VAL':
      newState[action.key] = action.payload;
      break;
  }
  return newState;
}

// Connect the screens to Redux.
let reducers = combineReducers({ user: userReqReducer })
let store = createStore(reducers);




const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  Profile: connect(mapStateToProp)(Profile),
  RequirementBoard: connect(mapStateToProp)(RequirementBoard),
  Item: connect(mapStateToProp)(Item),
  Catagory: ChooseCatagory,
  Hat: Hatform,
  Basket: BasketForm
}, {
    initialRouteName: 'Login'
  });

const AppContainer = createAppContainer(RootStack);







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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}