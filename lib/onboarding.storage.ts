import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = '@has_completed_onboarding';

export const setOnboardingComplete = async (userId: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(`${ONBOARDING_KEY}_${userId}`, 'true');
  } catch (error) {
    console.error('Error saving onboarding status:', error);
  }
};

export const hasCompletedOnboarding = async (userId: string): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(`${ONBOARDING_KEY}_${userId}`);
    return value === 'true';
  } catch (error) {
    console.error('Error reading onboarding status:', error);
    return false;
  }
};

export const clearOnboardingStatus = async (userId: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`${ONBOARDING_KEY}_${userId}`);
  } catch (error) {
    console.error('Error clearing onboarding status:', error);
  }
};