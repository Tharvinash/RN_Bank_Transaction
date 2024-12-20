import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const SignIn = () => {
  return (
    <View className='flex-1 bg-black'>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={() => router.replace('/(tabs)/transactions')}>
        <Text>Transactions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
