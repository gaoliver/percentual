import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { Tabs, Tab, TabHeading, Icon, Text, Container } from "native-base";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import Colors from "./src/Constants/Colors";
import { styles } from "./src/Screens/styles";

import Header from "./src/Screens/Header";
import Calculadora from "./src/Screens/Calculadora";
import Crescimento from "./src/Screens/Crescimento";

export default function App() {
  return (
    <Container style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar style="light" />
      <Header />
      <Tabs
        tabBarPosition="bottom"
        tabBarUnderlineStyle={{ backgroundColor: null }}
      >
        {/* Calculadora */}
        <Tab
          heading={
            <TabHeading style={styles.tabHeading}>
              <Icon type="MaterialCommunityIcons" name="percent" />
              <Text>Percentual</Text>
            </TabHeading>
          }
        >
          <Calculadora />
        </Tab>
        {/* Crescimento */}
        <Tab
          heading={
            <TabHeading style={styles.tabHeading}>
              <Icon type="MaterialCommunityIcons" name="margin" />
              <Text>Crescimento</Text>
            </TabHeading>
          }
        >
          <Crescimento />
        </Tab>
      </Tabs>
    </Container>
  );
}
