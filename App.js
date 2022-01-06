import * as React from "react";
import RootNavigator from "./root/rootnavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootNavigator />
  );
}
