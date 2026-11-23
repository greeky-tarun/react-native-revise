import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const users = [
  { id: "1", name: "Alice Johns", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Charlie Brown", role: "Manager" },
  { id: "4", name: "Diana Prince", role: "Analyst" },
  { id: "5", name: "Ethan Hunt", role: "Engineer" },
  { id: "6", name: "Fiona Davis", role: "Product Manager" },
  { id: "7", name: "George Wilson", role: "Tester" },
  { id: "8", name: "Hannah Lee", role: "Writer" },
  { id: "9", name: "Isaac Clark", role: "Consultant" },
];

const HomeScreen = () => {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, backgroundColor: "#dbb9b9" }}
      renderItem={({ item }) => (
        <Text>
          {item.id}. {item.name}
        </Text>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "black" }} />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
