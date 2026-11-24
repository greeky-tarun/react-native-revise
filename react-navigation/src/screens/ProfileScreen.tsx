import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { userId } = route.params ?? {};
  return (
    <View>
      <Text>ProfileScreen {userId}</Text>
      <Button onPress={() => navigation.popTo("Home")}>Go to Home</Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
