import React from 'react';
import { createBottomTabNavigator, createStackNavigator, Button } from 'react-navigation';
import { Icon } from 'react-native-elements';
import LocationScreen from '../containers/LocationScreen';
import HomeScreen from '../containers/HomeScreen';
import ProfileScreen from '../containers/ProfileScreen';
import SettingsScreen from '../containers/SettingsScreen';
import * as colors from '../constants/colors';


const TabNavigator = createBottomTabNavigator(
  {
    Home: createStackNavigator({Home: HomeScreen, Settings: SettingsScreen}),
    Location: createStackNavigator({Location: LocationScreen, Settings: SettingsScreen}),
    Profile: createStackNavigator({Profile: ProfileScreen, Settings: SettingsScreen}),
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Location') {
          iconName = 'place';
        } else if (routeName === 'Profile') {
          iconName = 'person';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.$COLOR_PRIMARY,
      inactiveTintColor: colors.$lightpurple,
    },
  }
);

TabNavigator.navigationOptions = ({ navigation }) => ({
  header: null, // do not use the TabNavigator's header -- it's bugged out. Use the headers in each Stack Navigator instead.
});

export default TabNavigator;
