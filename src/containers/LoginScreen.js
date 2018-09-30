// /* eslint-disable */
import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import * as colors from '../constants/colors';
import Keychain from 'react-native-keychain';

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
  constructor(props) {
    super(props);
    this.state = {};
  }

  authenticateUser = (oAuthProvider) => {
    async function logIn() {
      const { type, token } = Expo.Facebook.logInWithReadPermissionsAsync('236471710557928', {
        permissions: ['email'],  
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert(
          'Logged in!',
          `Hi ${(await response.json()).name}!`,
        );
      }

      // Set the token with keychain to securely store data
      Keychain.setGenericPassword('session', token);
    }

    logIn();
    this.props.navigation.navigate('Home');
  }

  retrieveToken() {
    Keychain.getGenericPassword.then(creds => creds.password).then(token => {
      // use token
      this.setState({})
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>⏱ === 💰</Text>
        <Button
          onPress={() => this.authenticateUser('venmo')}
          title="Logasf in with Venmo"
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
