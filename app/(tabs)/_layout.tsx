import TabIcon from '@/components/TabIcon';
import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarLabelStyle: { fontFamily: 'SoraRegular' },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={focused ? 'home' : 'home-outline'}
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={focused ? 'heart' : 'heart-outline'}
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Favorites',
            headerShown: true,
            headerTitle: 'Favorite Coffees',
            headerTitleStyle: {
              fontFamily: 'SoraSemiBold',
              fontSize: 16,
            },
            headerStyle: { backgroundColor: Colors.offWhite },
            headerShadowVisible: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={focused ? 'person' : 'person-outline'}
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Profile',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                icon={focused ? 'settings' : 'settings-outline'}
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Settings',
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
}
