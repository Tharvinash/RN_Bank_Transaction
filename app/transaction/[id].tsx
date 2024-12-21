import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTransactionStore } from '@/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import { formatDate, formatDateAndTime } from '@/lib/util';
import { PaymentType, TransactionStatus } from '@/types/transaction';
import { router } from 'expo-router';

const TransactionInfo = () => {
  const { selectedTransaction } = useTransactionStore();

  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <View className='p-5 shadow-lg shadow-black bg-primary'>
        <Text className='text-white text-[20px] text-center font-MontserratBold'>
          Transaction Details
        </Text>
      </View>

      <ScrollView className='bg-secondary flex-1 p-5'>
        <View className='flex flex-col'>
          <View className='flex flex-row justify-center'>
            <Text className='text-white text-[24px]'>
              {selectedTransaction?.payment_type === PaymentType.Credit
                ? '-'
                : '+'}{' '}
              MYR
            </Text>
            <Text className='text-white text-[24px] font-MontserratSemiBold'>
              {' '}
              {selectedTransaction?.amount}
            </Text>
          </View>

          <Text className='text-white text-center text-[12px]'>
            {formatDateAndTime(selectedTransaction?.transaction_date || '')}
          </Text>
        </View>

        <View className='border-b-2 border-white my-10'></View>

        <View className='flex flex-col gap-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>Status</Text>
            <Text
              className={`text-[16px] ${
                selectedTransaction?.status === TransactionStatus.Success
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {selectedTransaction?.status.toUpperCase()}
            </Text>
          </View>

          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>Reference No</Text>
            <Text className='text-white text-[16px]'>
              {selectedTransaction?.reference_no}
            </Text>
          </View>

          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>To</Text>
            <Text className='text-white text-[16px]'>
              {selectedTransaction?.recipient}
            </Text>
          </View>

          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>From</Text>
            <Text className='text-white text-[16px]'>
              {selectedTransaction?.sender}
            </Text>
          </View>

          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>When</Text>
            <Text className='text-white text-[16px]'>
              {formatDate(selectedTransaction?.transaction_date || '')}
            </Text>
          </View>

          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>Transfer Method</Text>
            <Text className='text-white text-[16px]'>
              {selectedTransaction?.transfer_method}
            </Text>
          </View>

          <View className='flex flex-row items-center justify-between'>
            <Text className='text-white text-[16px]'>Receipt Reference</Text>
            <Text className='text-white text-[16px]'>
              {selectedTransaction?.description}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className='absolute bottom-0 left-0 right-0 bg-primary p-5 shadow-lg shadow-black'>
        <View className='flex flex-row gap-10 items-center justify-center mb-5'>
          <View className='w-[48px] h-[48px] bg-[#14c1b5] rounded-full items-center justify-center'>
            <Entypo name='share' size={24} color='white' />
          </View>
          <View className='w-[48px] h-[48px] bg-[#14c1b5] rounded-full items-center justify-center'>
            <Fontisto name='arrow-swap' size={24} color='white' />
          </View>
        </View>
        <TouchableOpacity onPress={() => router.back()} className='h-[50px] bg-primaryLight rounded-lg flex justify-center items-center'>
          <Text className='text-white text-lg'>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransactionInfo;
