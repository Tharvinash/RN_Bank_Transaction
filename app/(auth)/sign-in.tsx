import { Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useBiometrics } from '@/hook/BiometricProvider';

const SignIn = () => {
  const { isAuthenticated, authenticate } = useBiometrics();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)/transactions');
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaView className='flex-1 bg-primary flex flex-col p-5 items-center justify-center'>
      <View className='flex flex-col gap-2'>
        <Text className='text-white font-MontserratBold text-[32px] text-center'>
          Welcome Back
        </Text>
        <Text className='text-white font-MontserratSemiBold text-[16px] text-center'>
          Hello there, sign in to continue
        </Text>
      </View>

      <View className='flex items-center justify-center w-full my-10'>
        <Image
          source={require('../../assets/images/signIn.png')}
          resizeMode='contain'
        />
      </View>

      <Ionicons
        onPress={authenticate}
        name='finger-print'
        size={72}
        color='white'
      />
    </SafeAreaView>
  );
};

export default SignIn;
