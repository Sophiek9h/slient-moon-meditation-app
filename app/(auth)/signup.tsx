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
import Checkbox from "expo-checkbox";
import { signUpWithEmail } from "@/lib/firebase.auth";

const signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Validation
    if (!username.trim()) {
      Alert.alert("Error", "Please enter a username");
      return;
    }

    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    if (!password) {
      Alert.alert("Error", "Please enter a password");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    if (!checked) {
      Alert.alert("Error", "Please accept the Privacy Policy");
      return;
    }

    // Try to create account
    setLoading(true);
    try {
      const user = await signUpWithEmail(email, password, username);
      console.log("Account created successfully:", user.email);
      
      // Navigate to main app (tabs)
      router.replace("/(onboarding)");
      
    } catch (error: any) {
      Alert.alert("Sign Up Failed", error.message);
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

        <Text className="text-center text-2xl font-helveticaBold">
          Create your account
        </Text>

        {/* We'll add facebook and google Sign-In later */}
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
          OR SIGN UP WITH EMAIL
        </Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Username"
          autoCapitalize="none"
          editable={!loading}
          className="border border-gray-200 rounded-2xl px-6 py-5 mb-6 mx-3 bg-gray-100"
        />

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

        <View className="mx-5 flex flex-row items-center justify-between">
          <Text className="text-gray-500">
            I have read the{" "}
            <Text className="text-primaryBlue">Privacy Policy</Text>
          </Text>

          <Checkbox
            value={checked}
            onValueChange={setChecked}
            color={checked ? "#8E97FD" : undefined}
            disabled={loading}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          className="bg-primaryBlue rounded-full mx-3 py-4 mt-14 flex justify-center items-center"
          style={{ opacity: loading ? 0.6 : 1 }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-center font-helveticaMedium text-base text-white">
              GET STARTED
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("/(auth)/signin")}
          className="mt-6"
          disabled={loading}
        >
          <Text className="text-center text-gray-600">
            Already have an account?{" "}
            <Text className="text-primaryBlue font-helveticaMedium">
              Sign In
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default signup;