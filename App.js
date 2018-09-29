import React from 'react';
import RootStack from './src/navigation/RootStack';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <RootStack />
    );
  }
}
