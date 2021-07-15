import * as React from "react";
import {
  View,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { styles } from "../styles/styles";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PupCard = (props) => (
  <Card styles={styles.customCard} mode="elevated">
    <Card.Content>
      <Card.Cover source={require("../images/Daisy.jpg")} />
      <Title>{props.dogName}</Title>
      <Paragraph>{props.dogDescription}</Paragraph>
    </Card.Content>
  </Card>
);

export default PupCard;
