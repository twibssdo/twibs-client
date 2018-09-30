import React from 'react';
import { View, StyleSheet, FlatList, List } from 'react-native';
// import NavBarDummy from '../components/NavBarDummy';
import TweeberView from '../components/TweeberView';
import Tweeber from '../util/tweeber';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweebers: [],
    }
    this.getTweebers = this.getTweebers.bind(this);
  }

  componentDidMount() {
    this.getTweebers();
  }

  getTweebers() {
    // fetch would go here
    const tweebers = [new Tweeber(), new Tweeber(), new Tweeber(), new Tweeber()];
    tweebers[0].setName('Colin', 'McCarthy');
    tweebers[1].setName('Will', 'Adamowicz');
    tweebers[2].setName('Christopher', 'Washburn');
    tweebers[3].setName('Shen-shen', 'Wu');
    this.setState({ tweebers });
  }

  render() {
    return (
      <List style={styles.container}>
        <FlatList
          data={this.state.tweebers}
          renderItem={({ tweeber }) => (
            <TweeberView tweeber={tweeber} />
          )}
        />
        {/* {tweebers.map((tweeber, i) => <TweeberView key={`tk${i}`} tweeber={tweeber} makeTweeb={makeTweeb} />)} */}
      </List>
    );
  }
};

export default Location;
