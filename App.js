import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

import Calculadora from "./Calculadora";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          {/* Titulo */}
          <Text style={styles.Title}>% P e r c e n t u a l %</Text>
          {/* Corpo do APP */}
          <Calculadora />
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    color: "#FFF",
    fontSize: 40,
  },
});
