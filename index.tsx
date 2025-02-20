import { registerRootComponent } from "expo";
import AppNavigator from "./src/app/navigation/AppNavigator";
import { FC } from "react";
import { PaperProvider } from "react-native-paper";

const App: FC = () => (
  <PaperProvider>
    <AppNavigator />
  </PaperProvider>
);

registerRootComponent(App);
