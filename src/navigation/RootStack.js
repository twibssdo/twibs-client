import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';
import LocationScreen from '../containers/LocationScreen';

export default createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Location: LocationScreen,
});
