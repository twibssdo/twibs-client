// /* eslint-disable */
import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import * as colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$themeOne,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 60,
  },
});

export default class Home extends React.Component {
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
        <Text style={styles.logo}>⏱ === 💰</Text>
        <Button
          onPress={() => this.authenticateUser('venmo')}
          title="Log in with Venmo"
          color={colors.$venmo}
          accessibilityLabel="Log in with Venmo"
        />
        <Button
          onPress={() => this.authenticateUser('facebook')}
          title="Log in with Facebook"
          color={colors.$facebook}
          accessibilityLabel="Log in with Venmo"
        />
      </View>
    );
  }
}
