import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PaymentType, Transaction, TransferMethod } from '@/types/transaction';
import { router } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

interface TransactionItemProps {
  transaction: Transaction;
  displayAmount: boolean;
}

const TransactionItem: React.FC<TransactionItemProps> = (props) => {
  const { transaction, displayAmount } = props;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-GB', options);
  };

  const renderIcon = (transferMethod: TransferMethod) => {
    switch (transferMethod) {
      case TransferMethod.Card:
        return <AntDesign name='creditcard' size={20} color='white' />;
      case TransferMethod.OnlineTransfer:
        return (
          <MaterialCommunityIcons
            name='bank-transfer'
            size={24}
            color='white'
          />
        );
      case TransferMethod.MobilePayment:
        return <MaterialIcons name='send-to-mobile' size={20} color='white' />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => router.push(`/transaction/${transaction.id}`)}
    >
      <View className='flex flex-row justify-between items-center mt-5'>
        <View className='flex flex-row items-center'>
          <View className='bg-secondary w-[40px] h-[40px] rounded-xl flex justify-center items-center'>
            {renderIcon(transaction.transfer_method)}
          </View>
          <View className='ml-5'>
            <Text className='text-white text-[16px] '>
              {transaction.description}
            </Text>
            <Text className='text-white text-[12px] '>
              {formatDate(transaction.transaction_date)}
            </Text>
          </View>
        </View>

        <View>
          {displayAmount ? (
            <Text className='text-white text-[16px] '>
              {transaction.payment_type === PaymentType.Credit ? '-' : '+'} RM{' '}
              {transaction.amount}
            </Text>
          ) : (
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
