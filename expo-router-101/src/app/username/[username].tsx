import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const userNamePage = () => {
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>{username}userNamePage</Text>
    </View>
  );
};

export default userNamePage;

const styles = StyleSheet.create({});
