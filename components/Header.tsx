import { Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View className='flex flex-row justify-between items-center'>
      <View className='flex flex-row'>
        <Text className='text-white text-[24px]'>Bank </Text>
        <Text className='text-primaryLight text-[24px]'>ReactNativeIV</Text>
      </View>

      <Ionicons name='notifications-outline' size={28} color='white' />
    </View>
  );
};

export default Header;
