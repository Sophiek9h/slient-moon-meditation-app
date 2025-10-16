import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { icons } from '@/constants/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8E97FD',
        tabBarInactiveTintColor: '#A1A4B2',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 80,
          margin: 20,
          borderRadius: 40,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 10,
          borderTopWidth: 1,
          borderTopColor: '#F1F1F1',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'HelveticaMedium',
          marginTop: 5,
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{ 
                width: 20, 
                height: 20, 
                tintColor: color 
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(sleep)"
        options={{
          title: 'Sleep',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.sleep}
              resizeMode="contain"
              style={{ 
                width: 20, 
                height: 20,
                tintColor: color 
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(meditate)"
        options={{
          title: 'Meditate',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.meditate}
              resizeMode="contain"
              style={{ 
                width: 20, 
                height: 20,
                tintColor: color 
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(ai)"
        options={{
          title: 'AI',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.ai}
              resizeMode="contain"
              style={{ 
                width: 20, 
                height: 20,
                tintColor: color 
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={icons.profile}
              resizeMode="contain"
              style={{ 
                width: 20, 
                height: 20, 
                tintColor: color 
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}