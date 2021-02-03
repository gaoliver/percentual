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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.Header}>
      <MaterialCommunityIcons
        name="brightness-percent"
        size={46}
        color="white"
      />
      <Text style={styles.Title}>P e r c e n t u a l</Text>
      <MaterialCommunityIcons
        name="brightness-percent"
        size={46}
        color="white"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Title: {
    color: "#FFF",
    fontSize: 40,
  },
});
