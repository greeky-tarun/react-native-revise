import {
  PixelRatio,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const FontScaleAndScale = () => {
  const { fontScale } = useWindowDimensions();
  const scale = PixelRatio.get();
  return (
    <View>
      <Text>Font Scale: {fontScale}</Text>
      <Text style={{ fontSize: 16 * fontScale }}>Responsive Text</Text>
      <Text>Scale: {scale}</Text>
    </View>
  );
};

export default FontScaleAndScale;

const styles = StyleSheet.create({});
