import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CssDimensions = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    // When you use flex on child components it relies on the space given to the parent.

    <View style={{flex: 1}}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>

    // Flex Direction
    // Note that column will fill the space from top to down &
    // Row will fill the space from left to right DO NOT BE CONFUSED

    // <View style={[styles.container, {flexDirection: 'column'}]}>
    //   <View style={{ flex: 1, backgroundColor: "red" }} />
    //   <View style={{ flex: 2, backgroundColor: "darkorange" }} />
    //   <View style={{ flex: 3, backgroundColor: "green" }} />
    // </View>

    // <View>
    //   <View
    //     style={{
    //       width: 50,
    //       height: 50,
    //       backgroundColor: "powderblue",
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: "skyblue",
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 150,
    //       height: 150,
    //       backgroundColor: "steelblue",
    //     }}
    //   />
    // </View>


  );
};

export default CssDimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
