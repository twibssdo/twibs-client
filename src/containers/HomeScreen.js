import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
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
  button: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.$COLOR_PRIMARY,
    borderRadius: 8,
  }
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
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('Location'); }}
          style={styles.button}>
          <Text style={{ fontSize: 18, color: colors.$COLOR_SECONDARY }}> Go to Your Location </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
