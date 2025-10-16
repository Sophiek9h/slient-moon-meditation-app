import { Redirect } from 'expo-router';
import { useAuth } from '@/lib/AuthContext';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#8E97FD" />
      </View>
    );
  }

  // Redirect based on auth state
  if (user) {
    return <Redirect href="/(tabs)/(home)" />;
  }

  return <Redirect href="/(auth)" />;
}