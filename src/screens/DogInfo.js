import React, { useEffect, useState, SafeAreaView } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import * as Index from "../components/index";
import firebase from "firebase";
import {
  Text,
  Caption,
  TextInput,
  Headline,
  Title,
  Paragraph,
  Checkbox,
  Button,
} from "react-native-paper";

const DogInfo = ({ navigation, route }) => {
  const [pupName, setPupName] = useState("Doggo");
  const [pupDescription, setPupDescription] = useState("Adorable");

  useEffect(() => {
    var db = firebase.firestore();
    var dogRef = db.collection("dogs");
    var query = dogRef.where("id", "==", route.params.id);
    console.log("working");

    query.onSnapshot((querySnapshot) => {
      var pupData = [];

      querySnapshot.forEach((doc) => {
        let currentID = doc.id;
        let obj = { ...doc.data(), ["id"]: currentID };
        pupData.push(obj);
      });
      setPupCardData(pupData);
      console.log("dataset");
    });
  }, []);

  return (
    <View styes={styles.container}>
      <Index.AppbarCustom />
      <ScrollView>
        <View styes={styles.containerCentered}>
          <Headline>Introducing {route.params.id}</Headline>
          {/* <Subheading>Introducing Daisy</Subheading> */}

          <Paragraph>
            This absolutely beautiful greyhound is around 7 years old A gentle
            settled girl, she loves to have her 10 minute “zoomies” then a comfy
            sofa for 6 hours.
          </Paragraph>
          <Paragraph>
            She’s super with the other dogs! Further assessment ongoing as she’s
            new to the shelter
          </Paragraph>
          <Text styles={{ fontWeight: "bold" }}>Almost Home NI</Text>
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Full Name"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            maxLength={320}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Full Name"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            maxLength={320}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Full Name"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            textContentType={"emailAddress"}
            maxLength={320}
          />
          <Text>Agree to be contacted by Almost Home NI *</Text>
          <Text>Yes</Text>
          <Checkbox
          // status={checked ? 'checked' : 'unchecked'}
          // onPress={() => {
          //   setChecked(!checked);}}
          />
          <Text>No</Text>
          <Checkbox
          // status={checked ? 'checked' : 'unchecked'}
          // onPress={() => {
          //   setChecked(!checked);}}
          />
          <Button
            mode="contained"
            // onPress={_handleLoginPress}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
      <Index.CustomFooter />
    </View>
  );
};
export default DogInfo;
