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

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.searchBar__unclicked}>
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            //value={searchPhrase}
            //onChangeText={setSearchPhrase}
            //   onFocus={() => {
            //     setClicked(true);
            //   }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {/* {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )} */}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {/* {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )} */}
        <Image
          source={require("../assets/images/Icon_Filter.png")}
          style={styles.IconFilter}
        />
      </View>
    </View>
  );
};
export default Notification;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  searchBar__unclicked: {
    padding: 15,
    flexDirection: "row",
    width: 263,
    height: 48,
    backgroundColor: "#d9dbda",
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
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  IconFilter: {
    width: 65,
    height: 69,
    paddingTop: 2,
  },
});
