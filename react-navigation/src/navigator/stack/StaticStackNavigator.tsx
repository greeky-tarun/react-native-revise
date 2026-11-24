import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: {
      screen: DetailScreen,
      initialParams: {
        userId: 10,
      },
      options: {
        headerStyle: { backgroundColor: "rgb(34, 88, 153)" },
      },
    },
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function StaticStackNavigator() {
  return <Navigation />;
}
