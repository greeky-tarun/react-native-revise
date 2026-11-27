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

import { NativeTabs } from "expo-router/native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Icon sf="gear" md="person" />
        <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
