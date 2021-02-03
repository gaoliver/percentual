import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Calculadora from "./Screens/Calculadora";
import Crescimento from "./Screens/Crescimento";

// const Stack = createStackNavigator();

// const Navigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Crescimento" component={Crescimento} />
//         <Stack.Screen name="Calculadora" component={Calculadora} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculadora" component={Calculadora} />
        <Tab.Screen name="Crescimento" component={Crescimento} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
