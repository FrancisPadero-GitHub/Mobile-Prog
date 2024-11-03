import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomFont from "./CustomFont";

type ButtonLinkName = {
  name: string;
};
// For the already have account link buttons
const LinkButton = (props: ButtonLinkName) => {
  return (
    <TouchableOpacity style={styles.linkButton}>
      <CustomFont style={[styles.textLink]} fontType="Bold">
        {props.name}
      </CustomFont>
    </TouchableOpacity>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  // Link button
  linkButton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    // position
    position: "absolute",
    bottom: "20%",
  },

  textLink: {
    textDecorationLine: "underline",
    fontSize: 14,
    color: '#999999',
    letterSpacing: 1,
  },
});
