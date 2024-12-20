import { Tabs } from 'expo-router';

export default function Layout() {
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
