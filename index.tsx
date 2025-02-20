import { registerRootComponent } from "expo";
import { FC } from "react";
import { PaperProvider } from "react-native-paper";
import App from "./App";

const Main: FC = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
);

registerRootComponent(Main);
