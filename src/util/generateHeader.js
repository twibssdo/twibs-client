import React from 'react';
import { Icon } from 'react-native-elements';
import * as colors from '../constants/colors';

export default title => ({ navigation }) => {
  return ({
    headerTitle: title,
    headerRight: (
      <Icon
        name="settings"
        onPress={() => navigation.navigate('Settings')}
        color={colors.$COLOR_PRIMARY}
        containerStyle={{marginRight: 10}}
      />
    ),
  });
};
