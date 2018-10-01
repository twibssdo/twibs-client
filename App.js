import React from 'react';
import SwitchNavigator from './src/navigation/SwitchNavigator';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <SwitchNavigator />
    );
  }
}
