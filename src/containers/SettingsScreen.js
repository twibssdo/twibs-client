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
});

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Settings',
  };
  
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Placeholder for settings</Text>
      </View>
    );
  }
}
