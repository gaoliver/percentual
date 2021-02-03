import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Calculadora from "./Calculadora";
import Crescimento from "./Crescimento";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Crescimento" component={Crescimento} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Crescimento" component={Crescimento} />
        <Tab.Screen name="Calculadora" component={Calculadora} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
