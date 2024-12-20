import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useFetch } from '@/lib/fetch';
import { Transaction } from '@/types/transaction';

const Transactions = () => {
  const {
    data: transactions,
    loading,
    error,
  } = useFetch<Transaction[]>('/(api)/transaction');
  console.log(transactions, error)


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
