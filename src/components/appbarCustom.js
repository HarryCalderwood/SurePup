import * as React from "react";
import { Appbar } from "react-native-paper";
import { styles } from "../styles/styles";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppbarCustom = () => {
  const navigation = useNavigation();

  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar dark="false" styles={styles.AppbarHeader}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.headerLogo}
          source={require("../images/SurePupLogo.png")}
        />
      </TouchableOpacity>
      <Appbar.Content
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Appbar.Content
        title="Partners"
        onPress={() => navigation.navigate("Partners")}
      />
      <Appbar.Content
        title="Contact"
        onPress={() => navigation.navigate("Contact")}
      />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar>
  );
};

export default AppbarCustom;
