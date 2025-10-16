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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

const signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log({ username, email, password, checked });
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
          Create your account
        </Text>

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

        <TouchableOpacity className="bg-white border border-gray-200 rounded-full mx-3 py-4 mt-6 flex justify-center items-center">
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
          keyboardType="name-phone-pad"
          autoCapitalize="none"
          className="border border-gray-200 rounded-2xl px-6 py-5 mb-6 mx-3 bg-gray-100"
        />

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-200 rounded-2xl px-6 py-5 mb-6 mx-3 bg-gray-100"
        />

        <View className="relative mx-3 mb-6">
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            className="border border-gray-200 rounded-2xl px-6 py-5 bg-gray-100 pr-14"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5"
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
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-primaryBlue rounded-full mx-3 py-4 mt-14 flex justify-center items-center"
        >
          <Text className="text-center font-helveticaMedium text-base text-white">
            GET STARTED
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default signup;
