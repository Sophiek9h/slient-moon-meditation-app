// app/index.tsx
import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter, useNavigationContainerRef } from "expo-router";

export default function Index() {
  const router = useRouter();
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (navigationRef.isReady()) {
        router.replace("/(auth)");
      }
    }, 100); // tiny delay to ensure the layout is ready

    return () => clearTimeout(timeout);
  }, [navigationRef]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}
