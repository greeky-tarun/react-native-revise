import { useState } from "react";
import { Image, Text, TextInput, View, Pressable } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text numberOfLines={5}>Hello React Native!</Text>

      {/* Remote image from the internet */}
      {/* <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoHXu9r19UIOR3pcOGGZnRQbaWkpMV3Cn9X38zIkUyg&s=10",
        }}
        width={200}
        height={200}
      /> */}

      {/* Local image */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 100,
          width: 100,
        }}
        blurRadius={10}
      />

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"blue"}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          margin: 10,
        }}
      />

      {/* <Pressable onPress={() => alert("Button pressed")}>
        <Text>Press Me</Text>
      </Pressable> */}

      <Pressable
        onPress={() => alert("button pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#448" : "rgb(173, 121, 186)",
        })}
        hitSlop={{
          top: 50,
          bottom: 50,
          left: 10,
          right: 10,
        }}
      >
        {({ pressed }) =>
          pressed ? <Text>Pressing...</Text> : <Text>Press me</Text>
        }
      </Pressable>
    </View>
  );
}
