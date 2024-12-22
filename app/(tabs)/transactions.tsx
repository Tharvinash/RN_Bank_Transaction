import * as LocalAuthentication from 'expo-local-authentication';
import {
  FlatList,
  ImageBackground,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { fetchAPI, useFetch } from '@/lib/fetch';
import { Transaction } from '@/types/transaction';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import TransactionItem from '@/components/TransactionItem';
import Swiper from 'react-native-swiper';
import { Card } from '@/types/card';
import Options from '@/components/Options';
import Header from '@/components/Header';

const Transactions = () => {
  const [displayAmount, setDisplayAmount] = useState(false);
  const swiperRef = useRef<Swiper>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const { data: cards } = useFetch<Card[]>('/(api)/cards');

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

  const loadTransaction = async (id: string) => {
    try {
      const { data } = await fetchAPI(`/(api)/transaction/${id}`);
      data && setTransactions(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);

    cards &&
      loadTransaction(cards[cardIndex].id).then(() => {
        setRefreshing(false);
      });
  };

  const handleCardChange = (index: number) => {
    setCardIndex(index);
    cards && loadTransaction(cards[index].id);
  };

  useEffect(() => {
    cards && loadTransaction(cards[0].id);
  }, [cards]);

  const renderItem = useCallback(
    ({ item: transaction }: { item: Transaction }) => (
      <TransactionItem
        transaction={transaction}
        displayAmount={displayAmount}
      />
    ),
    [displayAmount]
  );

  const keyExtractor = useCallback(
    (transaction: Transaction) => transaction.id,
    []
  );

  return (
    <SafeAreaView className='flex-1 bg-primary p-5'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2567f9']}
          />
        }
      >
        <Header />

        <View className='flex flex-row mt-10'>
          <Text className='text-white text-[22px]'>Your Card</Text>
        </View>

        <View className='mt-5'>
          {!!cards ? (
            <Swiper
              height={200}
              ref={swiperRef}
              loop={false}
              dot={
                <View className='w-[32px] h-[4px] mx-1 bg-white rounded-full' />
              }
              activeDot={
                <View className='w-[32px] h-[4px] mx-1 bg-primaryLight rounded-full' />
              }
              onIndexChanged={(index) => handleCardChange(index)}
            >
              {cards?.map((item, i) => (
                <View key={item.id}>
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
            </Swiper>
          ) : (
            <ActivityIndicator size='large' color='bg-secondary' />
          )}
        </View>

        <Options />

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
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={transactions}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;
