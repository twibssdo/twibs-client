import React from 'react';
import View from 'react-native';
import Tweeber from './src/util/tweeber';
import RootStack from './src/navigation/RootStack';
import Location from './src/containers/Location';

const dummyTweebers = [new Tweeber(1), new Tweeber(2), new Tweeber(3)];
dummyTweebers[0].setName('Will', 'Adamowicz');
dummyTweebers[1].setName('Colin', 'McCarthy');
dummyTweebers[2].setName('Christopher', 'Washburn');
const makeTweeb = id => console.log('Somebody tweebed user with id ', id);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <Location tweebers={dummyTweebers} makeTweeb={makeTweeb} />
      </View>
    );
  }
}
