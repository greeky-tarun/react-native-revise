import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  const isLoggedIn = true;
  return (
    // <View style={{ flex: 1 }}>
    //   <Text>header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn}>
        {/* <Stack.Screen name="index" />
        <Stack.Screen name="about" /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
