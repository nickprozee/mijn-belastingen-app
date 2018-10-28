import React from 'react';
import { Provider } from 'react-redux';
import { UIManager } from 'react-native';
import * as Expo from 'expo';

import store from './src/Store';
import AppNavigator from './src/AppNavigator';

export default class Root extends React.Component {

  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}