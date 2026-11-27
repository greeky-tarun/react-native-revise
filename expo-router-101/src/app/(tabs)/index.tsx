import Home from "@/components/home";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Text>Helo world</Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/login"}>Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
