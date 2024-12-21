import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFetch } from '@/lib/fetch';
import { Card } from '@/types/card';

const Cards = () => {
  const { data: cards, loading, error } = useFetch<Card[]>('/(api)/cards');

  return (
    <SafeAreaView className='flex-1 bg-primary p-5'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row'>
            <Text className='text-white text-[24px]'>Bank </Text>
            <Text className='text-[#2567f9] text-[24px]'>ReactNativeIV</Text>
          </View>

          <Ionicons name='notifications-outline' size={28} color='white' />
        </View>

        <View className='flex flex-row mt-10 mb-5'>
          <Text className='text-white text-[22px]'>Available Card</Text>
        </View>

        {cards?.map((item, i) => (
          <View key={item.id} className='mb-5'>
            <ImageBackground
              source={
                i === 1
                  ? require('./../../assets/images/card2.png')
                  : require('./../../assets/images/card1.png')
              }
              className='w-[320px] h-[164px] justify-end p-3 rounded-lg'
              resizeMode='contain'
            >
              <View className='absolute bottom-2 left-5'>
                <Text className='text-white text-lg font-bold'>
                  {item.card_number}
                </Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
