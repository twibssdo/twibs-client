import React from 'react';
import { View, Image, Button, Text } from 'react-native';

export default ({ tweeber, makeTweeb }) => {
  // some logic using tweeber data
  return (
    <View>
      <Image source={tweeber.avatarImgUrl} />
      <Text>{tweeber.fullName}</Text>
      <Button
        onPress={() => makeTweeb(tweeber.id)}
        title="Tweeb this fool"
        disabled={tweeber.offerMade}
      />
    </View>
  )
}