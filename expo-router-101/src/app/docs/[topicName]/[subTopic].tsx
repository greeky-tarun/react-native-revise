import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const subTopic = () => {
  const { topicName, subTopic } = useLocalSearchParams();
  return (
    <View>
      <Text>
        subTopic: {topicName}/{subTopic}
      </Text>
    </View>
  );
};

export default subTopic;

const styles = StyleSheet.create({});
