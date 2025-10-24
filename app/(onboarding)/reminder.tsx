import { useRouter } from 'expo-router';
import { useAuth } from '@/lib/AuthContext';
import { setOnboardingComplete } from '@/lib/onboarding.storage';
import { TouchableOpacity, Text } from 'react-native';

const ReminderScreen = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleComplete = async () => {
    if (user) {
      // Mark onboarding as complete
      await setOnboardingComplete(user.uid);
      
      // Navigate to tabs
      router.replace('/(tabs)/(home)');
    }
  };

  return (
    // Your onboarding UI
    <TouchableOpacity onPress={handleComplete}>
      <Text>Get Started</Text>
    </TouchableOpacity>
  );
};