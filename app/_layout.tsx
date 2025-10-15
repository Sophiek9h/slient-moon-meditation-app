import "./global.css";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false, // Hide headers globally
          animation: "slide_from_right", // Smooth page transition
        }}
      >
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
            headerShown: false, // No header bar
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
