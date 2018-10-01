import React, { Component } from 'react';
import { View, StyleSheet, FlatList, List, Text } from 'react-native';
// import NavBarDummy from '../components/NavBarDummy';
import TweeberView from '../components/TweeberView';


export default class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweebers: [],
    };
    this.getTweebers = this.getTweebers.bind(this);
  }

  componentDidMount() {
    this.getTweebers();
  }

  getTweebers() {
    // fetch would go here
    const tweebers = require('../util/dummyTweebers');
    this.setState({ tweebers });
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 22, textAlign: 'center', padding: 20}}>Your Location Here</Text>
        <View>
          <FlatList
            data={this.state.tweebers}
            renderItem={({ item }) => <TweeberView tweeber={item} key={`tk${item.id}`} />}
            keyExtractor={(item, index) => `tk${index}`}
          />
        </View>
      </View>
    );
  }
};
