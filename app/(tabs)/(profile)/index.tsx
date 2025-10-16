import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { signOutUser } from '@/lib/firebase.auth';
import { useAuth } from '@/lib/AuthContext';

const index = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

const handleLogout = async () => {
  Alert.alert(
    'Logout',
    'Are you sure you want to logout?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          setLoading(true);
          try {
            await signOutUser();
            console.log('User logged out successfully');
            // Use href instead of replace
            router.push('/(auth)');
          } catch (error: any) {
            Alert.alert('Error', error.message);
          } finally {
            setLoading(false);
          }
        },
      },
    ]
  );
};

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 px-6">
        <Text className="text-2xl font-helveticaBold mt-10 mb-6">Profile</Text>

        {/* User Info */}
        <View className="bg-gray-200 rounded-2xl p-6 mb-6">
          <Text className="text-lg font-helveticaMedium mb-2">
            {user?.displayName || 'User'}
          </Text>
          <Text className="text-gray-500 font-helveticaLight">
            {user?.email}
          </Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          disabled={loading}
          className="bg-red-500 rounded-full py-4 flex justify-center items-center"
          style={{ opacity: loading ? 0.6 : 1 }}
        >
          <Text className="text-center font-helveticaMedium text-base text-white">
            {loading ? 'Logging out...' : 'LOGOUT'}
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default index;