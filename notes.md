# dependencies

-> it's necesarry for run the application

# dev dependencies

-> while developemnt all the things that we need
-> production

# react dom

-> for web development it's necesaary
-> for mobile app we use react native

# package.json

-> heart of project like meta data, dependencies, scripts

# packagelock.json

-> to store or secure the dependencies for no mismatch

# index.html

-> entry point of app

# public folder

-> static files - no process by virte

# eslint

-> for formatting

# vite

-> just a bundler for fast development

# create root

-> utility

# hmr - hot module reload

-> no need to change manually vite automatically change by using dom

# jsx - syntantical sugar

-> javascript xml
-> we can write html in java script

# components

-> function + return jsx

# <> </> -> empty react fragment

# rafce -> react arrow function export

# props = property

->props is a object, it's like passing parameters to a function

-> Object destructuring is a JavaScript feature that lets you take properties from an object and assign them to variables.

# virtual dom

-> virtual dom is a light weight in memory = actual dom
-> window > document > html ....
-> react uses virtual dom to update our real dom, react do not use direct real dom

## how it works?

1. initial Render
2. state / props update -> new virtual dom
3. diffing - look and comapre what changed -> before and after changes
4. find minimal chnages
5. update real dom

# fiber

-> React Fiber is React’s internal system for figuring out what changed in your UI and applying those changes efficiently. It’s used by both React for the web and React Native.

-> Render phase: React compares the new UI with the previous one and prepares the necessary updates. Fiber breaks this work into small units, so React can prioritize or pause work when appropriate.

-> Commit phase: React applies the prepared updates to the screen. This phase runs together and isn’t interrupted midway.

# React Hooks

-> hooks is just a function which prefix is "use".
Some built-in hooks are:

1.  useState - to manage state - changes in ui called state
    const [state, setState] = useState(initialValue)
    initial value can be [], object, 0, "string", function
    if initial value is 0 then the state is also 0
    setState is a method
    for render we use callback function for useState beacue if we don't use callback then it goes it inifinite loop

    import { useState } from "react";

function App() {
const [count, setCount] = useState(0);
return (

<div>
<h1>{count}</h1>
<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(0)}>reset</button>
<button onClick={() => setCount(count - 1)}>-</button>
</div>
);
}

export default App;

2.  useEffect
    Run side effects after rendering
    ex. api calling, timers, event listner

    useEffect(
    ()=>{},
    []
    )

    [] -> Dependency array = it contain state and effect
    1. without dep array
    2. with dep array
    3. empty dep array

3.  useMemo
4.  useCallback
5.  useRef
6.  useContext

-> use(hook_name) -> custom hook
rules:

1. call your hook above the return statement
2. hooks only use in function component

# Rendering: React calculates what UI should appear.

# Mounting: React puts the component into the DOM for the first time.

# Re-rendering: React updates the UI when relevant state or props change.

# Unmounting: React removes the component from the DOM.

# Event Handling

-> mouse events
-> keyboard events
-> form events
-> touch events
-> ui events(onScroll, onResize)

-> cross browser wrapper - synthetic Event

1.  works consistently across all browsers
2.  synthetic event > NativeEvent > browser

# form handling

1. controlled
   -> input is controlled by react state
   1. single source of truth
   2. easy validation
   3. works well with react ecosystem

   const [name, setName] = useState("");
   return (
     <div>
       <input
         type="text"
         value={name}
         placeholder="Enter your name"
         onChange={(e) => setName(e.target.value)}
       />
       <h1>Hello {name}</h1>
     </div>
   );

usage = login, signup, filters seach, dynamic ui

2.  uncontrolled
    -> input manages its own state(DOM handles it) 1. no react state 2. value accessed only when needed 3. hard to validate 4. no reactive, less controll

        const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.name.value);

    };
    return (
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" />
    <button type="submit">submit</button>
    </form>
    );

# React Native

-> SafeAreaView
-> useSafeAreaInsets - it gives you safe area by detecing, give read only value
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
const insets = useSafeAreaInsets();
// console.log(insets);
return (
<View
style={{
        flex: 1,
        // backgroundColor: "#c29f9f",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }} >
<StatusBar barStyle="dark-content" />
<Text>HomeScreen</Text>
</View>
);
};

export default HomeScreen;
-> initialWindowMetrics

# Stylesheet

-> create
-> compose
const HomeScreen = () => {
const isActivate = false;

const buttonStyle = StyleSheet.compose(
styles.button,
isActivate ? styles.activeButton : null,
);
return (
<SafeAreaView style={{ flex: 1 }}>
<StatusBar barStyle="dark-content" />
<View style={styles.container}>
{/_ @ts-ignore _/}
<View style={buttonStyle}>
<Text style={styles.buttonText}>Composed Style</Text>
</View>
</View>
</SafeAreaView>
);
};
-> flatten
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const styleB = StyleSheet.create({
text: { color: "#d7baba", fontWeight: "bold" },
});

const flat = StyleSheet.flatten([styleA.text, styleB.text]);

const HomeScreen = () => {
return (
<SafeAreaView style={{ flex: 1 }}>
<StatusBar barStyle="dark-content" />
<View>
<Text style={flat}>Flatten Style</Text>
</View>
</SafeAreaView>
);
};

export default HomeScreen;

# Responsive design

-> useWindowDimensions
import {
StyleSheet,
Text,
View,
useWindowDimensions,
Pressable,
} from "react-native";
import React from "react";
import \* as ScreenOrientation from "expo-screen-orientation";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenDimension = () => {
const { height, width } = useWindowDimensions();
const isTablet = width >= 768;
const isLandScape = width > height;

const lockLandScape = async () => {
await ScreenOrientation.lockAsync(
ScreenOrientation.OrientationLock.LANDSCAPE,
);
};

const lockPortrait = async () => {
await ScreenOrientation.lockAsync(
ScreenOrientation.OrientationLock.PORTRAIT,
);
};
return (
<SafeAreaView style={{ flex: 1, padding: 16 }}>
<Text style={{ fontSize: width * 0.06 }}>Responsive Text 📱</Text>

      <View
        style={{
          flexDirection: isTablet ? "row" : "column",
        }}
      >
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#6C63FF",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 1</Text>
        </View>
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#FF6584",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 2</Text>
        </View>
      </View>

      <Text style={{ color: "#888", marginTop: 16 }}>
        Screen: {Math.round(width)} × {Math.round(height)}
        {isLandScape ? " (Landscape)" : " (Portrait)"}
      </Text>

      {/* Orientation Buttons */}
      <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
        <Pressable
          onPress={lockLandScape}
          style={{
            flex: 1,
            backgroundColor: "#6C63FF",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Landscape 🔄</Text>
        </Pressable>

        <Pressable
          onPress={lockPortrait}
          style={{
            flex: 1,
            backgroundColor: "#FF6584",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Portrait 📱</Text>
        </Pressable>
      </View>
    </SafeAreaView>

);
};

export default ScreenDimension;

**fontScale** tells you how much the user has increased or decreased their system font size. Making your app accessible to users who prefer larger text.

**scale** generally refers to the device's pixel density ratio. Working with physical pixel dimensions, image resolution, and pixel conversions.

-> useColorScheme

import { StyleSheet, Switch, Text, useColorScheme, View } from "react-native";
import React, { useState } from "react";

const themes = {
light: {
Background: "#fff",
card: "#f5f5f5",
text: "#1a1a1a",
subtext: "#666",
accent: "#6c63ff",
},
dark: {
Background: "#121212",
card: "#1e1e1e",
text: "#fff",
subtext: "#aaa",
accent: "#9d97ff",
},
};

const ColorScheme = () => {
const systemScheme = useColorScheme();
const [manualDark, setManualDark] = useState<boolean | null>(null);
const isDark = manualDark !== null ? manualDark : systemScheme === "dark";
const theme = isDark ? themes.dark : themes.light;
return (
<View style={[styles.container, { backgroundColor: theme.Background }]}>
{/_ Header _/}
<View style={[styles.card, { backgroundColor: theme.card }]}>
<Text style={[styles.title, { color: theme.text }]}>
{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
</Text>
<Text style={[styles.subtitle, { color: theme.subtext }]}>
System preference: {systemScheme ?? "unknown"}
</Text>
</View>

      {/* Toggle Row */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.accent }]}>
          Themed Card 🎨
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Colors adapt to dark/light mode automatically
        </Text>
      </View>
    </View>

);
};

export default ColorScheme;

const styles = StyleSheet.create({
container: { flex: 1, padding: 16, gap: 12 },
card: { padding: 20, borderRadius: 16 },
row: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
},
title: { fontSize: 20, fontWeight: "bold" },
subtitle: { fontSize: 14, marginTop: 4 },
label: { fontSize: 16 },
});

## react native navigation

# command:

npx create-expo-app@latest your-app-name -t blank-typescript :- to create react native app
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/elements
npm install @react-navigation/native-stack - for stack navigation
npm install @react-navigation/stack
npx expo install react-native-gesture-handler @react-native-masked-view/masked-view - animation
npm install @react-navigation/bottom-tabs - bottom tab
npx expo install @expo/vector-icons - for icons
npx expo install @react-navigation/material-top-tabs - for top tab
npm install @react-navigation/drawer - drawer navigation
npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets - include with drawer
npm run reset-project - to reset project

-> moving from one screen to another screen without using props then we use react navigation / navigation library
-> expo router is built top of react navigation

## what is navigator?

1. which screen is shown
2. how back works
3. headers

## static vs dynamic navigation

-> **Static**: screens are declared in one config object, we no need to load at run time, for small apps, consistent arc

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
-> **Dynamic**: component based configuration with significant more boilerplate for TS and deep linking
const Stack = createNativeStackNavigator();

function MyStack() {
return (
<Stack.Navigator
screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(8, 85, 137)",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "100",
        },
      }} >
<Stack.Screen
name="Home"
component={HomeScreen}
options={{
          title: "Overview",
          headerStyle: {
            backgroundColor: "#07225c",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
/>
<Stack.Screen name="Details" component={DetailScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
);
}

export default function DynamicStackNavigator() {
return (
<NavigationContainer>
<MyStack />
</NavigationContainer>
);
}

## types of navigator

1. stack navigator
   -> to use stack navigation use Button or link from elements
   navigate("") - Go to a screen by their name
   goBack() - go to prev screen
   push("") - Always adds a new instance
   replace("") - replace current screen so user can't go to prev screen -> Splash
   popTo(") - directly jump
   popToTop() - go back to the first screen

   # use cases:

   -> you want screen-to-screen navigation
   -> you need back button support
   -> you want push/pop navigation flow
   1. Authetication flow
   2. E-commerce apps
   3. Social media app
   4. multi steps form
   5. Details

2. tabs navigator - to show the main section

3. drawer navigator

## Expo router 101

-> expo router is built on top of react navigation
-> it brings file based system -> source of truth for your app's navigation
-> ex. index.tsx -> /
about.tsx -> /about
settings.tsx -> /settings

if you make any of the tsx file in the app folder it will treate as route ex index.tsx, about.tsx, settings.tsx -> route
if you make any file outside the app folder that will be treated as component not route segment

if you make profile/index.tsx -> /profile
profile/details.tsx -> profile/details
profile.tsx -> profile

these all called static route and nested static routes

## Dynamic Route: a route that accept a var value

[]: square bracket convention then write which basis you want to, for that we use useLocalSearchParams()
ex: [userId].tsx:
const userIdScreen = () => {
const { userId } = useLocalSearchParams();
return (
<View>
<Text>{userId}</Text>
</View>
);
};
export default userIdScreen;

<Link href={"/123"}>useId Page</Link>
// here 123 is user id

for dynamic route use diffrent folder becaue to not get conflict: good practice
nested dynamic router - ex: docs - folder, [topicName] - nested folder, index.tsx - file, [subTopic].tsx - file
docs/[topicName]/[subTopic].tsx
/index.tsx
here []/[]/[].. - nested dynamic routes

# catch-all - [...slug] - you can put number of nested routes as per you want

usecase: if you are making a document specific app

# \_layout.tsx

# slot: this will work as a placeholder

# route groups

-> () use this for the folder to hide your path
-> \_layout.tsx: share the common layout between files
-> this is better for organisational purpose and better developer experience
