import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBarDummy from '../components/NavBarDummy';
import Tweeber from '../components/Tweeber';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tweeber: {
    height: 50,
  },
});

const Location = ({ tweebers, makeTweeb }) => (
  <View style={styles.container}>
    <View style={styles.tweeber} />
    {tweebers.map((tweeber, i) => <Tweeber key={`tk${i}`} tweeber={tweeber} makeTweeb={makeTweeb} />)}
    <NavBarDummy />
  </View>
);

console.log(typeof Location);

export default Location;
