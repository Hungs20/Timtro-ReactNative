import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CupertinoSearchBarBasic from "./CupertinoSearchBarBasic";

class Search extends Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        ></ScrollView>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <View style={styles.rect2}>
          <View style={styles.rect3}></View>
          <View style={styles.rect4}></View>
          <CupertinoSearchBarBasic
            style={styles.cupertinoSearchBarBasic}
          ></CupertinoSearchBarBasic>
        </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  scrollArea: {
    width: 362,
    height: 740,
    backgroundColor: "#E6E6E6",
    marginLeft: 409
  },
  scrollArea_contentContainerStyle: {
    width: 363,
    height: 740
  },
  rect: {
    top: 0,
    height: 247,
    position: "absolute",
    backgroundColor: "rgba(236,236,236,1)",
    left: 0,
    right: 0
  },
  rect2: {
    top: 198,
    left: 15,
    width: 330,
    height: 193,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 24,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 6,
    shadowOpacity: 0.19,
    shadowRadius: 2
  },
  rect3: {
    flex: 0.33,
    backgroundColor: "rgba(255,255,255,1)",
    margin: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  rect4: {
    flex: 0.68,
    backgroundColor: "rgba(236,236,236,1)",
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    margin: 0
  },
  cupertinoSearchBarBasic: {
    height: 46,
    width: 310,
    position: "absolute",
    left: 10,
    top: 9,
    backgroundColor: "#fff"
  },
  rectStack: {
    height: 391,
    flex: 1,
    marginLeft: -772
  }
});

export default Search;
