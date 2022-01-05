import * as React from "react";
import {View, Text} from "react-native";
import { NavigationContainer } from "@react-native";
import {createNativeStackNavigator} from "@react-navigation/native"
import HomeScreen from "./src/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
