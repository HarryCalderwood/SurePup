import React, { useEffect, useState, SafeAreaView } from "react";
import { ScrollView, View, To } from "react-native";
import { styles } from "../styles/styles";
import firebase from "firebase";

import { Text, Headline, Paragraph } from "react-native-paper";
import * as Index from "../components/index";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const data = [
    { name: "Lily", description: "Hello" },
    { name: "Sarah", description: "Hi" },
  ];
  const [pupCardData, setPupCardData] = useState(data);

  useEffect(() => {
    var db = firebase.firestore();
    console.log("working");
    db.collection("dogs").onSnapshot((querySnapshot) => {
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
    <View style={styles.container}>
      <View styles={styles.AppbarHeader}>
        <Index.AppbarCustom />
      </View>
      <ScrollView>
        {pupCardData.map((dog, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DogInfo", { id: dog.id })}
          >
            <View styles={styles.cardView}>
              <Index.PupCard
                dogName={dog.name}
                dogDescription={dog.description}
              />

              <Text>{dog.description}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate("DogInfo", { name: "Daisy" })}
        >
          <View styles={styles.cardView}>
            <Index.PupCard />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DogInfo", { name: "John" })}
        >
          <View styles={styles.cardView}>
            <Index.PupCard />
          </View>
        </TouchableOpacity>

        <View styles={styles.cardView}>
          <Index.PupCard />
        </View>

        <View styles={styles.cardView}>
          <Index.PupCard />
        </View>

        <View style={styles.faqContainer}>
          <Headline>FAQ</Headline>
          <Paragraph>
            What do you want to achieve? We want to make sure that puppies and
            dogs are not traded in criminal or immoral circumstances which would
            suggest they or their parents were born and/or raised in a
            neglectful, abusive environment. We also want to provide new or
            current owners a platform to aid them through the raising and taking
            care of their best friend throughout their lifetime!
          </Paragraph>
          <Paragraph>
            Why puppies (dogs) and not other animals? One day we would love to
            help with other trades of animals. However, the market for dogs is
            significant and they are in great demand. Additionally, there are so
            many unique breeds of dog with many having a high price tag due to
            pedigree or scarcity amongst other things which attracts criminal or
            nefarious players to the market
          </Paragraph>
          <Paragraph>
            How do I ask you a question? Please feel free to email us your
            questions at carolyn@surepup.co.uk or maurizio@surepup.co.uk and we
            will get back to you as soon as possible!
          </Paragraph>
        </View>
        <View style={styles.bottom}>
          <Index.CustomFooter />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
