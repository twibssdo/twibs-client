import React from 'react';
import {
  StyleSheet, Text, View, Image, Button,
} from 'react-native';
import * as colors from '../constants/colors';
import generateHeader from '../util/generateHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$COLOR_SECONDARY,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginBottom: 20,
    fontSize: 32,
    color: colors.$COLOR_PRIMARY,
  },
  name: {
    fontSize: 20,
  },
  bio: {
    fontSize: 14,
    padding: 20,
  },
  tweebs: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default class ProfileScreen extends React.Component {
  static navigationOptions = generateHeader('Profile');

  constructor() {
    super();
    this.state = {
      bio: '',
      fullName: '',
      tweebsMade: 0,
    }
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    // placeholder data
    this.setState({
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, dui a tempor facilisis, tortor neque ullamcorper quam, consectetur placerat est diam ut nisl. Sed sapien diam, volutpat sed nulla viverra, laoreet feugiat felis. Cras ipsum leo, faucibus ac pulvinar ut, mollis vitae lacus. Praesent dictum facilisis nunc, in rhoncus mauris dignissim eu. Ut consequat nisi in mauris sollicitudin, vitae gravida turpis porta. Donec sit amet ex auctor, porta tortor ac, sodales ex. Ut id nisi laoreet, fermentum lectus in, tristique ex. Mauris feugiat massa non dolor placerat efficitur.',
      fullName: 'William Adamowicz',
      tweebsMade: '20',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Your Profile</Text>
        <Image source={require('../../assets/avatar.jpeg')} style={{width: 180, height: 180}} />
        <Text style={styles.name}>{this.state.fullName}</Text>
        <Text style={styles.bio}>{this.state.bio}</Text>
        <Text style={styles.tweebs}>You have made {this.state.tweebsMade} tweebs in your lifetime!</Text>
      </View>
    );
  }
}
