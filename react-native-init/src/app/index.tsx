import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenDimension from "./useScreenDimension";
import FontScaleAndScale from "./FontScaleAndScale";
import ColorScheme from "./ColorScheme";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScreenDimension /> */}
      {/* <FontScaleAndScale /> */}
      <ColorScheme />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
