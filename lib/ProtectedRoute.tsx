import { useAuth } from './AuthContext';
import { useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { hasCompletedOnboarding } from './onboarding.storage';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [onboardingChecked, setOnboardingChecked] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      if (authLoading) return;

      const inAuthGroup = segments[0] === '(auth)';
      const inOnboardingGroup = segments[0] === '(onboarding)';
      const inTabsGroup = segments[0] === '(tabs)';

      if (!user && !inAuthGroup) {
        // User is not logged in and trying to access protected route
        router.replace('/(auth)');
      } else if (user && inAuthGroup) {
        // User is logged in but on auth screens
        // Check if they've completed onboarding
        const completed = await hasCompletedOnboarding(user.uid);
        
        if (completed) {
          // Already did onboarding, go to tabs
          router.replace('/(tabs)/(home)');
        } else {
          // New user, send to onboarding
          router.replace('/(onboarding)');
        }
      } else if (user && inTabsGroup) {
        // User in tabs, make sure they completed onboarding
        const completed = await hasCompletedOnboarding(user.uid);
        
        if (!completed && !inOnboardingGroup) {
          // Shouldn't be in tabs without onboarding
          router.replace('/(onboarding)');
        }
      }

      setOnboardingChecked(true);
    };

    checkOnboarding();
  }, [user, authLoading, segments]);

  if (authLoading || !onboardingChecked) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#8E97FD" />
      </View>
    );
  }

  return <>{children}</>;
}