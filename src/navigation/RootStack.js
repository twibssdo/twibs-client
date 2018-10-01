import React from 'react';
import { createStackNavigator, TouchableOpacity, Text } from 'react-navigation';
import TabNavigator from './TabNavigator';
import SettingsScreen from '../containers/SettingsScreen';

const RootStack = createStackNavigator(
  {
    Main: TabNavigator,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

export default RootStack;
