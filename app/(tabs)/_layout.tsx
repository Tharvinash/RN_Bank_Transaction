import { useBiometrics } from '@/hook/BiometricProvider';
import { Redirect, Tabs } from 'expo-router';

export default function Layout() {
  const { isAuthenticated } = useBiometrics();

  if (!isAuthenticated) return <Redirect href='/sign-in' />;

  return (
    <Tabs initialRouteName='transactions'>
      <Tabs.Screen
        name='transactions'
        options={{
          title: 'Transactions',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='cards'
        options={{
          title: 'Cards',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
