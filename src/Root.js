import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './Views/Login';

import { connect } from 'react-redux'
import { authenticateUser } from './Actions/authenticationActions';
import { bindActionCreators } from 'redux';



class Root extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <View style={styles.container}>
      <Login />
    </View>
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onAuthenticate: authenticateUser,
  }, dispatch);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57606f'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);