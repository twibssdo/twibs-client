import React from 'react';
import { TextInput } from 'react-native';

const Login = () => (
  <View>
    <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 50,}}
    />
    <button>Login</button>
  </View>
);

export default Login;
