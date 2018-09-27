// /* eslint-disable */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tweeber from './src/util/tweeber';

import Login from './src/components/Login';

const dummyTweebers = [new Tweeber(1), new Tweeber(2), new Tweeber(3)];
dummyTweebers[0].setName('Will', 'Adamowicz');
dummyTweebers[1].setName('Colin', 'McCarthy');
dummyTweebers[2].setName('Christopher', 'Washburn');
const makeTweeb = id => console.log('Somebody tweebed user with id ', id);

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>⏱ === 💰</Text>
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
