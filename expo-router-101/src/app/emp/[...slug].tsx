import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const EmpDynamicPage = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>EmpDynamicPage: {Array.isArray(slug) ? slug.join("/") : slug}</Text>
    </View>
  );
};

export default EmpDynamicPage;

const styles = StyleSheet.create({});
