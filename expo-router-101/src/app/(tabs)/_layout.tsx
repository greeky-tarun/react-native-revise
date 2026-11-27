// JS tabs

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import type { ComponentProps } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { Tabs } from "expo-router";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome size={28} name="home" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "explore",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome size={28} name="cog" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="about"
//         options={{
//           title: "about",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome size={28} name="question" color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// native tabs:

// import { NativeTabs } from "expo-router/native-tabs";

// export default function TabLayout() {
//   return (
//     <NativeTabs>
//       <NativeTabs.Trigger name="index">
//         <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
//         <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="explore">
//         <NativeTabs.Trigger.Icon sf="gear" md="settings" />
//         <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//       <NativeTabs.Trigger name="about">
//         <NativeTabs.Trigger.Icon sf="gear" md="person" />
//         <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }

// custom tabs

type TabBarProps = Parameters<
  NonNullable<ComponentProps<typeof Tabs>["tabBar"]>
>[0];

function MyTabBar({ state, descriptors }: TabBarProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View
      style={[
        styles.tabBarWrapper,
        { paddingBottom: Math.max(insets.bottom, 12) },
      ]}
    >
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label = options.title ?? route.name;
          const color = isFocused ? "#FFFFFF" : "#64748B";
          const href = route.name === "index" ? "/" : `/${route.name}`;

          const onPress = () => {
            if (!isFocused) {
              router.navigate(href as never);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              activeOpacity={0.8}
              style={[styles.tabItem, isFocused && styles.tabItemActive]}
            >
              {options.tabBarIcon?.({
                focused: isFocused,
                color,
                size: 18,
              })}
              <Text
                style={[styles.tabLabel, isFocused && styles.tabLabelActive]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="compass" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarWrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "transparent",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 6,
    gap: 6,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 18,
  },
  tabItemActive: {
    backgroundColor: "#2563EB",
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
  },
  tabLabelActive: {
    color: "#FFFFFF",
  },
});
