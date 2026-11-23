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
