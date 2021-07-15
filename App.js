import { StatusBar } from "expo-status-bar";
import React from "react";
import DogInfo from "./src/screens/DogInfo";
import Home from "./src/screens/Home";
import Partners from "./src/screens/Partners";
import Contact from "./src/screens/Contact";
import ApiKeys from "./constants/ApiKeys";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(ApiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "orange",
          headerStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerTitle: (props) => <CustomHeader {...props} /> }}
        />
        <Stack.Screen name="Partners" component={Partners} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="DogInfo" component={DogInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
