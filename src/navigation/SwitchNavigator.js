import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';
import TabNavigator from './TabNavigator';
import RootStack from './RootStack';

// const AppStack = createStackNavigator({ Main: TabNavigator });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createSwitchNavigator(
  {
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);