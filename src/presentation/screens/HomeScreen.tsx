import { DarkTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={[styles.container, { backgroundColor: DarkTheme.colors.background }]}>
      <Text style={[styles.text, { color: DarkTheme.colors.text }]} variant="displaySmall">
        Welcome to the App!
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate("Dashboard")} mode="contained">
          Go to Dashboard
        </Button>
        <Button onPress={() => navigation.navigate("Companies")} mode="outlined">
          Go to Company List
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

// ✅ Global Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 25,
  },
  buttonContainer: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
});
