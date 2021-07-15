import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  //Global styles
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  containerCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  bottomDrawerSection: {
    marginBottom: 15,
    borderTopWidth: 1,
  },

  //Home
  faqContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(249, 177, 0, 1)",
  },
  customCard: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardView: {
    flex: 1,
    width: 300,
    height: 600,
  },

  //Header
  headerLogo: {
    height: 40,
    width: 100,
    position: "relative",
    flexDirection: "row",
  },
  headerView: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },

  AppbarHeader: {
    color: "white",
    backgroundColor: "white",
  },

  //Contact
  textInput: {
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },

  //Footer

  footerContainer: {
    flexDirection: "column-reverse",
  },

  bottom: {
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
  },

  //Partners
  sponsorImages: {
    height: 200,
    width: 200,
    marginBottom: 40,
  },
});
