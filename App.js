// /* eslint-disable */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Login';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>⏱ === 💰</Text>
          <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 60,
  },
});

export default App;
