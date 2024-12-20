import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const Transactions = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => router.push('/transaction/123')}>
        <Text>Transactions Info</Text>
      </TouchableOpacity>
      <Text>Transactions</Text>
    </View>
  );
};

export default Transactions;
