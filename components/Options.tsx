import { Text, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const Options = () => {
  return (
    <View className='flex flex-row justify-between items-center mt-2'>
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
        <Text className='text-white text-[12px] text-center mt-2'>Receive</Text>
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
        <Text className='text-white text-[12px] text-center mt-2'>Payment</Text>
      </View>
    </View>
  );
};

export default Options;
