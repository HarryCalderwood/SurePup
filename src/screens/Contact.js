import React from "react";
import {
  View,
  Keyboard,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, TextInput, Switch, Button, Headline } from "react-native-paper";
import { styles } from "../styles/styles";
import * as Index from "../components/index";

const Contact = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Index.AppbarCustom />
        <View style={styles.containerCentered}>
          <Headline>Contact Us</Headline>
        </View>

        <View style={styles.container}>
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Full Name"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            textContentType={"emailAddress"}
            maxLength={320}
          />

          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Email Address"
            // value={password}
            // onChangeText={(password) => setPassword(password)}
            maxLength={20}
            // secureTextEntry={hidePassword ? false : true}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Phone (Optional)"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            textContentType={"emailAddress"}
            maxLength={320}
          />

          <TextInput
            mode="outlined"
            multiline="true"
            numberOfLines="4"
            style={styles.textInput}
            label="Your Message"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            textContentType={"emailAddress"}
            maxLength={320}
          />
        </View>

        <View style={styles.container}>
          <Button
            mode="contained"
            // onPress={_handleLoginPress}
          >
            Send message
          </Button>
        </View>
      </ScrollView>
      <Index.CustomFooter />
    </View>
  );
};
export default Contact;
