// /* eslint-disable */
import React from 'react';
import {
  StyleSheet, Text, View, Button,
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
    fontSize: 60,
  },
});

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  authenticateUser = (oAuthProvider) => {
    console.log(oAuthProvider);
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>⏱ === 💰</Text>
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
          accessibilityLabel="Log in with Facebook"
        />
      </View>
    );
  }
}
