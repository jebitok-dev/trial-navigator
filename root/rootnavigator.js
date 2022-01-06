import {NavigationContainer, createNativeStackNavigator} from "@react-navigation/native";
import HomeScreen from "../src/Homescreen";
import DetailsScreen from "../src/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}