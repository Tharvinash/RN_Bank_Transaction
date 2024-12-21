import { useBiometrics } from '@/hook/BiometricProvider';
import { Text } from 'react-native';
import { Redirect, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
  const { isAuthenticated } = useBiometrics();

  if (!isAuthenticated) return <Redirect href='/sign-in' />;

  return (
    <Tabs
      initialRouteName='transactions'
      screenOptions={{
        tabBarActiveTintColor: '#ffb017',
        tabBarInactiveTintColor: '#121433',
        tabBarStyle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#23265a',
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name='transactions'
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='bank'
              size={24}
              color={focused ? '#FFA001' : '#fff'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#FFA001' : '#fff',
                fontSize: 12,
                fontWeight: focused ? 'bold' : 'normal',
                marginTop: 4,
              }}
            >
              Transactions
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name='cards'
        options={{
          title: 'Cards',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='credit-card'
              size={24}
              color={focused ? '#FFA001' : '#fff'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#FFA001' : '#fff',
                fontSize: 12,
                fontWeight: focused ? 'bold' : 'normal',
                marginTop: 4,
              }}
            >
              Cards
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
