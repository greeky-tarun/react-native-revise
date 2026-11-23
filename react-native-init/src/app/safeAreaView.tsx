import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function UnSafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 26 }}>
        Header (blends under notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 26 }}>
        This content might be hidden behind the status bar in the dark mode
      </Text>
    </View>
  );
}

function SafeScreen() {
  return (
    <SafeAreaView
      edges={["bottom", "top"]}
      style={{ flex: 1, backgroundColor: "#1c1c1e" }}
    >
      <Text style={{ color: "#fff", fontSize: 18, padding: 26 }}>
        Header (safely below notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 26 }}>
        This content might be hidden behind the status bar in the dark mode
      </Text>
    </SafeAreaView>
  );
}

const index = () => {
  return (
    <>
      <SafeScreen />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
