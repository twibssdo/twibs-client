import React from 'react';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as colors from '../constants/colors';
import Avatar from './Avatar';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: colors.$lightpurple,
    borderRadius: 2,
    shadowColor: colors.$COLOR_PRIMARY,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: '40%',
  },
  options: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.$COLOR_SECONDARY,
    borderRadius: 8,
  }
});

export default class TweeberView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tweeber } = this.props;
    return (
      <View style={styles.container}>
        <Avatar
          style={styles.avatar}
          avatarUrl={tweeber.avatarUrl}
          fullName={tweeber.fullName}
        />
        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => console.log('tweebed user with id', tweeber.id)}
            style={styles.button}>
            <Text style={{color: colors.$COLOR_PRIMARY}}> Send Tweeb </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
