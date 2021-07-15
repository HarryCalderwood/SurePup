import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { styles } from "../styles/styles";

const CustomFooter = () => (
  <Appbar style={{ backgroundColor: "rgba(255, 89, 39, 1)" }}>
    <Appbar.Content title={"\u00A9 2020 SurePup"} />
    <Appbar.Content subtitle={"Terms of Service"} />
    <Appbar.Content subtitle={"Privacy Policy"} />
    <Appbar.Action
      icon="instagram"
      onPress={() => console.log("Pressed mail")}
    />
    <Appbar.Action
      icon="facebook"
      onPress={() => console.log("Pressed label")}
    />
    <Appbar.Action
      icon="linkedin"
      onPress={() => console.log("Pressed delete")}
    />
  </Appbar>
);

export default CustomFooter;
