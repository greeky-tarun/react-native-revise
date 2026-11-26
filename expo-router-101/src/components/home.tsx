import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href={"/profile/details"}>About</Link>
      <Link href={"/user/123"}>useId Page</Link>
      <Link href={"/username/tarun"}>username Page</Link>
      <Link href={"/docs/expo-router/nested-dynamic-route"}>Go to Docs</Link>
      <Link href={"/emp/suraj/8383"}>Go to emp</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
