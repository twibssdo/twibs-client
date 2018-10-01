import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';
import LocationScreen from '../containers/LocationScreen';
import ProfileScreen from '../containers/ProfileScreen';

export default createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Location: LocationScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Login',
  }
);
