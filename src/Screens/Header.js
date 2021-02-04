import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.Header}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <MaterialCommunityIcons name="percent" size={45} color="white" />
        <Text style={styles.Title}> P e r c e n t u a l </Text>
        <MaterialCommunityIcons name="margin" size={45} color="white" />
      </View>
    </View>
  );
};

export default Header;
