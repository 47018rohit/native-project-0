import React from "react";
import { registerRootComponent } from "expo";
import AppNavigator from "./src/app/navigation/AppNavigator";

const App = () => <AppNavigator />;

registerRootComponent(App);
