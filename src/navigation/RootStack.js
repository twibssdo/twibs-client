import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';

export default createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
});
