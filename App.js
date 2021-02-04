import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { StatusBar } from 'expo-status-bar'
import "react-native-gesture-handler";
import Colors from './src/Constants/Colors'

import Header from "./src/Screens/Header";
import Navigator from "./src/Navigator";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <StatusBar style="light" />
        <Header />
        <Navigator />
      </View>
    </TouchableWithoutFeedback>
  );
}
