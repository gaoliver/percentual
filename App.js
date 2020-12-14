import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Calculadora from "./Calculadora";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <StatusBar translucent={true} />
          {/* Titulo */}
          <View style={styles.Header}>
          <MaterialCommunityIcons name="brightness-percent" size={46} color="white" />
          <Text style={styles.Title}>P e r c e n t u a l</Text>
          <MaterialCommunityIcons name="brightness-percent" size={46} color="white" />
          </View>
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
  Header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Title: {
    color: "#FFF",
    fontSize: 40,
  },
});
