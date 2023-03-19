import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Alert = () => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleShape}>
        <Image
          source={require("../assets/images/alert.gif")}
          style={styles.profileImg}
        />
        <Text style={styles.headerText}>Fire detected!</Text>
      </View>
      <Image
        source={require("../assets/images/Icon_Close.png")}
        style={styles.IconClose}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  CircleShape: {
    width: 320,
    height: 320,
    borderRadius: 320 / 2,
    backgroundColor: "black",
    borderWidth: 6,
    borderColor: "#F57D5C",
    // shadowColor: "#E1718C",
    // shadowBlur: 40,
    // shadowSpread: 10,
    boxShadow: "0px 0px 23px 2px rgba(225, 113, 140, 0.51)",
    position: "absolute",
    top: 100,
  },
  profileImg: {
    width: 170,
    height: 170,
    position: "relative",
    top: 30,
    left: 64,
  },
  headerText: {
    fontSize: 23,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "#FFFFFF",
    //fontFamily: "Montserrat",
    paddingTop: 40,
  },
  IconClose: {
    width: 75,
    height: 75,
    marginBottom: -450,
  },
});
export default Alert;
