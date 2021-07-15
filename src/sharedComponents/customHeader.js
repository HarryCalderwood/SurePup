import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { Text, Title } from "react-native-paper";

export default function customHeader(navigation) {
  return (
    <View styles={styles.headerView}>
      <Image
        style={styles.headerLogo}
        source={require("../images/SurePupLogo.png")}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Title>Home</Title>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate("Partners");
          }}
        >
          <Title>Partners</Title>
        </TouchableOpacity>
        <TouchableOpacity>
          <Title>Contact</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}
