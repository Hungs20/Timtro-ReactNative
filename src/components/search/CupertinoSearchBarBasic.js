import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class CupertinoSearchBarBasic extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.inputBox}>
          <Icon name="magnify" style={styles.inputLeftIcon}></Icon>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CECED2",
    padding: 8
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  inputLeftIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 40,
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 15,
    color: "#000",
    flex: 1
  }
});

export default CupertinoSearchBarBasic;
