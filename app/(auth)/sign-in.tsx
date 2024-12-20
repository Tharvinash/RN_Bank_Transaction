import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={() => router.replace('/(tabs)/transactions')}>
        <Text>Transactions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
