import React, { Component } from 'react';
import { View } from 'react-native';
import NavBarDummy from '../components/NavBarDummy';
import Tweeber from '../components/Tweeber';

const Location = ({ tweebers, makeTweeb }) => (
  <View style={{flexDirection: 'column', flex: 1, justifyContent: 'space-between'}}>
    <View style={{height: 50}} />
    {tweebers.map((tweeber, i) => <Tweeber key={`tk${i}`} tweeber={tweeber} makeTweeb={makeTweeb} />)}
    <NavBarDummy />
  </View>
);

console.log(typeof Location);

export default Location;
