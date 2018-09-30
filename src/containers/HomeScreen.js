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
        <Button
          onPress={() => this.props.navigation.navigate('Location')}
          title="Tweebers near me"
          color={colors.$button}
          accessibilityLabel="Tweebers near me"
        />
      </View>
    );
  }
}
