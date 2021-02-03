import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from '../Constants/Colors'

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
    flex: 0.4,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 30
  },
  Title: {
    color: Colors.light,
    fontSize: 40,
  },
});
