import "./global.css";
import { Stack } from "expo-router";
import { useColorScheme, View, ActivityIndicator } from "react-native";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AuthProvider } from "@/lib/AuthContext";
import { ProtectedRoute } from "@/lib/ProtectedRoute";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  const [fontsLoaded] = useFonts({
    "Cereal-Medium": require("../assets/fonts/AirbnbCereal_Medium.otf"),
    "Cereal-Bold": require("../assets/fonts/AirbnbCereal_Bold.otf"),
    "Cereal-ExtraBold": require("../assets/fonts/AirbnbCereal_ExtraBold.otf"),
    "Cereal-Light": require("../assets/fonts/AirbnbCereal_Light.otf"),
    "HelveticaLight": require("../assets/fonts/HelveticaNeueLight.otf"),
    "HelveticaBold": require("../assets/fonts/HelveticaNeueBold.otf"),
    "HelveticaMedium": require("../assets/fonts/HelveticaNeueMedium.otf"),
    "HelveticaThin": require("../assets/fonts/HelveticaNeueThin.otf"),
    "HelveticaUltraLight": require("../assets/fonts/HelveticaNeueUltraLight.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <ProtectedRoute>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            {/* Root index */}
            <Stack.Screen name="index" options={{ headerShown: false }} />
            
            {/* Auth flow */}
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            
            {/* Onboarding flow */}
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            
            {/* Main tab navigation */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            
            {/* Fullscreen Player Page */}
            <Stack.Screen
              name="player"
              options={{
                headerShown: false,
                presentation: 'modal',
              }}
            />
          </Stack>
        </ThemeProvider>
      </ProtectedRoute>
    </AuthProvider>
  );
}