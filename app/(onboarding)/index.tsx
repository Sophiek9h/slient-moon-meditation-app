import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "expo-router";

const index = () => {
  const { user } = useAuth();
  const router = useRouter();

  // Get the username - try displayName first, fallback to email name, then "Friend"
  const getUsername = () => {
    if (user?.displayName) {
      return user.displayName;
    }
    if (user?.email) {
      // Get name before @ in email
      return user.email.split("@")[0];
    }
    return "Friend";
  };

  return (
    <SafeAreaView className="bg-primaryBlue h-full flex-1">
      {/* Content */}
      <Image
        source={images.welcomelogo}
        className="justify-center mt-10 text-center flex-row mx-auto"
        resizeMode="contain"
      />

      <Text className="text-center text-white mt-6 text-3xl font-helveticaMedium">
        Hi {getUsername()}, Welcome
        {"\n"}
        <Text className="font-helveticaThin mt-2">to Silent Moon</Text>
      </Text>

      <Text className="text-center text-white mt-14 mx-8 font-helveticaLight">
        Explore the app, Find some peace of mind to prepare for meditation.
      </Text>

      {/* Background Image */}
      <Image
        source={images.welcomeOnboardingGirl}
        className="absolute bottom-0 w-full"
        resizeMode="contain"
      />

      {/* Button - Absolute positioned at bottom */}
      <View className="absolute bottom-28 left-8 right-8">
        <TouchableOpacity
          onPress={() => router.push("/preferences")}
          className="bg-white rounded-full py-4 items-center justify-center"
        >
          <Text className="font-helveticaMedium text-base">GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
