import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const TransactionInfo = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Transaction Info {id}</Text>
    </View>
  );
};

export default TransactionInfo;
