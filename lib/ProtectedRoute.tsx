import { useAuth } from './AuthContext';
import { useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inOnboardingGroup = segments[0] === '(onboarding)';
    const inTabsGroup = segments[0] === '(tabs)';

    if (!user && !inAuthGroup) {
      // User is not logged in and trying to access protected route
      router.replace('/(auth)');
    } else if (user && inAuthGroup) {
      // User is logged in but on auth screens
      router.replace('/(tabs)/(home)');
    }
  }, [user, loading, segments]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#8E97FD" />
      </View>
    );
  }

  return <>{children}</>;
}