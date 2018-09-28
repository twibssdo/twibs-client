import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import * as colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$COLOR_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    color: colors.$COLOR_PRIMARY,
  },
});

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  authenticateUser = (oAuthProvider) => {
    console.log(oAuthProvider);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome Home</Text>
      </View>
    );
  }
}
