import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Pages/Home";
import { Incomes } from "./Pages/Incomes";
import { Outgoings } from "./Pages/Outgoings";
import {Graphs} from "./Pages/Graphs";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Incomes" component={Incomes} />
        <Stack.Screen name="Outgoings" component={Outgoings} />
        <Stack.Screen name="Graphs" component={Graphs} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
  },
});
