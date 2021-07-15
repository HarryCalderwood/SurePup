import React from "react";
import { ScrollView, View, Image, Linking } from "react-native";
import { styles } from "../styles/styles";
import * as Index from "../components/index";
import { Text, Headline, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const Partners = () => {
  return (
    <View style={styles.container}>
      <Index.AppbarCustom />
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.containerCentered}>
            <Headline>Partners</Headline>
          </View>
          <View style={styles.containerCentered}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.almosthome-ni.org/")}
            >
              <Image
                style={styles.sponsorImages}
                source={require("../images/AlmostHomeNI.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}></View>
      </ScrollView>
      <Index.CustomFooter />
    </View>
  );
};
export default Partners;
