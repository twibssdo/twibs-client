import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default ({ avatarUrl, fullName, style }) => (
  <View style={style}>
    <Image source={require('../../assets/avatar.jpeg')} style={{width: 100, height: 100}} />
    <Text>{fullName}</Text>
  </View>
)