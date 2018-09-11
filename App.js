import React from 'react';

import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import { UIManager } from 'react-native';

import { authenticationReducer } from './src/Reducers/authenticationReducer';
import { keyboardReducer } from './src/Reducers/keyboardReducer';
import { userReducer } from './src/Reducers/userReducer';
import { navigationReducer } from './src/Reducers/navigationReducer';

import * as Expo from 'expo';
import Login from './src/Views/Login';

const navigationOptions = {
  header: null
}
const middleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions
  }
});

const navReducer = createNavigationReducer(AppNavigator);
const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({ state: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

const allReducers = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  keyboard: keyboardReducer,
  appNavigation: navigationReducer,
  nav: navReducer
});

const store = createStore(
  allReducers,
  applyMiddleware(middleware),
);

export default class Root extends React.Component {

  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}