import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { StatusBar } from 'expo-status-bar'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./src/Screens/Header";
import Navigator from "./src/Navigator";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <Header />
        <Navigator />
      </View>
    </TouchableWithoutFeedback>
  );
}
