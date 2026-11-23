import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SingUpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image source={require("@/assets/image.png")} />
        <Text style={{ fontSize: 25, padding: 12, fontWeight: "bold" }}>
          Sign In
        </Text>
        <Text style={{ fontWeight: "400" }}>
          Let's experience the joy of telecare AI.
        </Text>
        <View style={{ alignItems: "flex-start", marginTop: 15 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
            Email address
          </Text>
          <TextInput
            placeholder="Enter your email"
            style={{
              borderColor: "#646464",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              paddingHorizontal: 15,
              textAlign: "left",
            }}
          />
        </View>
        <View style={{ alignItems: "flex-start", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={{
              borderColor: "#646464",
              borderRadius: 10,
              borderWidth: 1,
              width: 300,
              height: 40,
              paddingHorizontal: 15,
              textAlign: "left",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({});
