import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const userIdScreen = () => {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>{userId}</Text>
    </View>
  );
};

export default userIdScreen;

const styles = StyleSheet.create({});
