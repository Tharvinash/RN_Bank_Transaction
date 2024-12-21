import * as LocalAuthentication from 'expo-local-authentication';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useFetch } from '@/lib/fetch';
import { Transaction } from '@/types/transaction';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import TransactionItem from '@/components/TransactionItem';

const Transactions = () => {
  const [displayAmount, setDisplayAmount] = useState(false);

  const {
    data: transactions,
    loading,
    error,
  } = useFetch<Transaction[]>('/(api)/transaction');
  console.log(transactions, error);

  const handleDisplayAmount = async () => {
    if (!displayAmount) {
      const response = await LocalAuthentication.authenticateAsync();
      if (response.success) {
        setDisplayAmount(true);
      }
    } else {
      setDisplayAmount(false);
    }
  };

  return (
    <SafeAreaView className='flex-1 bg-primary p-5'>
      <View className='flex flex-row justify-between items-center'>
        <View className='flex flex-row'>
          <Text className='text-white text-[24px]'>Bank </Text>
          <Text className='text-[#2567f9] text-[24px]'>ReactNativeIV</Text>
        </View>

        <Ionicons name='notifications-outline' size={28} color='white' />
      </View>

      <View className='flex flex-row mt-10'>
        <Text className='text-white text-[22px]'>Your Card</Text>
      </View>

      <View className='flex flex-row justify-between items-center mt-5'>
        <View className='flex flex-col'>
          <View className='bg-secondary w-[52px] h-[52px] rounded-xl flex justify-center items-center'>
            <AntDesign name='arrowup' size={28} color='#ff2d2d' />
          </View>
          <Text className='text-white text-[12px] text-center mt-2'>Sent</Text>
        </View>
        <View className='flex flex-col'>
          <View className='bg-secondary w-[52px] h-[52px] rounded-xl flex justify-center items-center'>
            <AntDesign name='arrowdown' size={28} color='#15b825' />
          </View>
          <Text className='text-white text-[12px] text-center mt-2'>
            Receive
          </Text>
        </View>
        <View className='flex flex-col'>
          <View className='bg-secondary w-[52px] h-[52px] rounded-xl flex justify-center items-center'>
            <AntDesign name='clouduploado' size={28} color='white' />
          </View>
          <Text className='text-white text-[12px] text-center mt-2'>Topup</Text>
        </View>
        <View className='flex flex-col'>
          <View className='bg-secondary w-[52px] h-[52px] rounded-xl flex justify-center items-center'>
            <AntDesign name='scan1' size={28} color='white' />
          </View>
          <Text className='text-white text-[12px] text-center mt-2'>
            Payment
          </Text>
        </View>
      </View>

      <View className='flex flex-row mt-5 justify-between items-center'>
        <Text className='text-white text-[22px]'>Recent Activities</Text>

        {displayAmount ? (
          <Feather
            onPress={handleDisplayAmount}
            name='eye'
            size={24}
            color='white'
          />
        ) : (
          <Feather
            onPress={handleDisplayAmount}
            name='eye-off'
            size={24}
            color='white'
          />
        )}
      </View>

      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} displayAmount={displayAmount} />}
        keyExtractor={(item) => item.id}
      />

      {/* <TouchableOpacity onPress={() => router.push('/transaction/123')}>
        <Text>Transactions Info</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Transactions;
