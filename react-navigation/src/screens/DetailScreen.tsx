import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Link } from "@react-navigation/native";

const DetailScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username, userId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: "Detais on go",
      },
      [navigation],
    );
  });
  return (
    <View>
      <Text>DetailScreen {username}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Link screen={"Profile"} params={{ userId }}>
        Go to profile
      </Link>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
