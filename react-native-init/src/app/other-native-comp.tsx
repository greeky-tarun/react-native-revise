import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const HomeScreen = () => {
  const items = Array.from({ length: 5 }, (_, i) => `item ${i + 1}`);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, alignItems: "center" }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            marginBottom: 10,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text key={item}>{item}</Text>
        </View>
      ))}
      <Button
        title="Hello i am button"
        color={"red"}
        onPress={() => alert("hello")}
      />
      <Switch
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{ false: "#ddd", true: "#000" }}
        thumbColor={"#585858"}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
