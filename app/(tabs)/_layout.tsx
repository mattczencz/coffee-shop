import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="favorites" />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="settings" />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
}
