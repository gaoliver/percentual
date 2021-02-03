import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "./Constants/Colors";

// Screens
import Calculadora from "./Screens/Calculadora";
import Crescimento from "./Screens/Crescimento";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: Colors.grey,
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
          },
          activeTintColor: Colors.blue,
          keyboardHidesTabBar: true,
          labelStyle: {
            fontSize: 14,
            paddingBottom: 5,
            fontWeight: 'bold'
          },
          iconStyle: {
            marginTop: 15
          },
        }}
      >
        <Tab.Screen
          name="Calculadora"
          component={Calculadora}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="percent"
                  size={25}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Crescimento"
          component={Crescimento}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="margin"
                  size={25}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
