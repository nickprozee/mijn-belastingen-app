import React, { Component } from 'react';
import Root from './src/Root';
import { UIManager } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './src/Reducers';
import * as Expo from 'expo';
import { createLogger } from 'redux-logger'

const logger = createLogger({diff: true});
const store = createStore(allReducers, applyMiddleware(logger));

export default class App extends Component {
  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
  }
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}