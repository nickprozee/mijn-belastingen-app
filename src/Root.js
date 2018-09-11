import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './Views/Login';

import { connect } from 'react-redux'
import { authenticateUser } from './Actions/authenticationActions';
import { bindActionCreators } from 'redux';

import { createStackNavigator } from 'react-navigation';

const Navigation = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
});

class Root extends React.Component {
  render() {
    return <Navigation />
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
  appNavigation: state.appNavigation
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onAuthenticate: authenticateUser,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);