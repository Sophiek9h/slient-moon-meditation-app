import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmail } from "@/lib/firebase.auth";

const signin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Validation
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    if (!password) {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    // Try to sign in
    setLoading(true);
    try {
      const user = await signInWithEmail(email, password);
      console.log("Signed in successfully:", user.email);
      
      // Navigate to main app (tabs)
      router.replace("/(tabs)/(home)");
      
    } catch (error: any) {
      Alert.alert("Sign In Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="px-6 relative">
        <Image
          source={images.bgAuth}
          className="absolute top-0 "
          resizeMode="contain"
        />

        <TouchableOpacity
          onPress={() => router.push("./")}
          className="w-16 h-16 justify-center items-center rounded-full border border-gray-200 bg-slate-50 mt-6"
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            className="w-4 h-4 m-4 "
          />
        </TouchableOpacity>

        <Text className="mt-6 text-center text-2xl font-helveticaBold">
          Welcome Back!
        </Text>

        {/* We'll add Google and facebook Sign-In later */}
        <TouchableOpacity className="bg-facebookBlue rounded-full mx-3 py-4 mt-10 flex justify-center items-center">
          <View className="flex flex-row items-center gap-5">
            <Image
              source={icons.facebook}
              resizeMode="contain"
              className="w-6 h-6 "
            />
            <Text className="text-center font-helveticaMedium text-base text-white">
              CONTINUE WITH FACEBOOK
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white border border-gray-200 rounded-full mx-3 py-4 mt-10 flex justify-center items-center">
          <View className="flex flex-row items-center gap-5">
            <Image
              source={icons.google}
              resizeMode="contain"
              className="w-6 h-6 "
            />
            <Text className="text-center font-helveticaMedium text-base text-black">
              CONTINUE WITH GOOGLE
            </Text>
          </View>
        </TouchableOpacity>

        <Text className="text-center font-helveticaMedium text-sm text-gray-400 my-10">
          OR LOGIN WITH EMAIL
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
          className="border border-gray-200 rounded-2xl px-6 py-5 mb-6 mx-3 bg-gray-100"
        />

        <View className="relative mx-3 mb-6">
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            editable={!loading}
            className="border border-gray-200 rounded-2xl px-6 py-5 bg-gray-100 pr-14"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5"
            disabled={loading}
          >
            <Image
              source={showPassword ? icons.eyeOpen : icons.eye}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          className="bg-primaryBlue rounded-full mx-3 py-4 mt-8 flex justify-center items-center"
          style={{ opacity: loading ? 0.6 : 1 }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-center font-helveticaMedium text-base text-white">
              LOG IN
            </Text>
          )}
        </TouchableOpacity>

        {/* <Text className="text-center mt-5 font-helveticaLight">
          Forgot Password?
        </Text> */}

        <TouchableOpacity 
          onPress={() => router.push("/(auth)/signup")}
          className="mt-6"
          disabled={loading}
        >
          <Text className="text-center text-gray-600">
            Don't have an account?{" "}
            <Text className="text-primaryBlue font-helveticaMedium">
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default signin;