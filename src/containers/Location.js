import React, { Component } from 'react';
import { View } from 'react-native';
import NavBarDummy from '../components/NavBarDummy';
import Tweeber from '../components/Tweeber';

export default ({ tweebers, makeTweeb }) => (
  <View>
    <NavBarDummy />
    {tweebers.map(tweeber => <Tweeber props={tweeber} makeTweeb={makeTweeb} />)}
  </View>
);
