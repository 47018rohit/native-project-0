import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../presentation/screens/HomeScreen";
import DashboardScreen from "../../presentation/screens/DashboardScreen";
import CompanyListScreen from "../../presentation/screens/CompanyListScreen";

// Define the stack navigator
const Stack = createStackNavigator();

// AppNavigator component with navigation setup
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Companies" component={CompanyListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator; // Correctly export the AppNavigator component
