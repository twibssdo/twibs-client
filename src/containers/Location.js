import React, { Component } from 'react';
import { View } from 'react-native';
import NavBarDummy from '../components/NavBarDummy';
import Tweeber from '../components/Tweeber';

const Location = ({ tweebers, makeTweeb }) => (
  <View>
    <NavBarDummy />
    {tweebers.map((tweeber, i) => <Tweeber key={`tk${i}`} tweeber={tweeber} makeTweeb={makeTweeb} />)}
  </View>
);

console.log(typeof Location);

export default Location;
