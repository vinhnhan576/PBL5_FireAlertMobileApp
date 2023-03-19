import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
  Image,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import InfoCard from "./InfoCard";

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbarContainer}>
        <View style={styles.searchBar__unclicked}>
          {/* search Icon */}
          <Feather
            name="search"
            size={25}
            color="#313131"
            style={{ marginLeft: 1, paddingLeft: 10 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            selectionColor={"#EF652A"}
          />
        </View>

        <Image
          source={require("../assets/images/Icon_Filter.png")}
          style={styles.IconFilter}
        />
      </View>
      <View>
        <InfoCard
          title="Fire detected"
          label="22-01-2022"
          imgSrc={require("../assets/images/fire_alert.gif")}
          invert={false}
        />
        <InfoCard
          title="Fire detected"
          label="22-01-2022"
          imgSrc={require("../assets/images/fire_alert.gif")}
          invert={false}
        />
        <InfoCard
          title="Fire detected"
          label="22-01-2022"
          imgSrc={require("../assets/images/fire_alert.gif")}
          invert={false}
        />
      </View>
    </View>
  );
};
export default Notification;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchbarContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchBar__unclicked: {
    flexDirection: "row",
    width: 270,
    height: 55,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
  },
  //   searchBar__clicked: {
  //     padding: 10,
  //     flexDirection: "row",
  //     width: "80%",
  //     backgroundColor: "#d9dbda",
  //     borderRadius: 15,
  //     alignItems: "center",
  //     justifyContent: "space-evenly",
  //   },
  input: {
    fontSize: 16,
    marginLeft: 10,
    
  },
  IconFilter: {
    width: 82,
    height: 82,
    marginTop: 10,
  },
});
