import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomFont from "./CustomFont";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Latest upate the I did not change the color upon press but I left out the code. I changed my mind

//Props for the login and sign up nga lahi and dli naka mag manual ug set each
type ButtonName = {
  name: string;
};

// For the Sign up / in Button
const SignInUp = (props: ButtonName) => {
  // state management for the button and change the color if its pressed or not
  const [setPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[
        styles.signinButton,
        setPressed ? styles.buttonPressed : styles.buttonNormal,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <CustomFont
        style={[setPressed ? styles.pressedFont : styles.normalFont]}
        fontType="Bold"
      >
        {/* You can pass arguments on what text should be displayed here  ex. Sign In or Sign Up. */}
        {props.name}
      </CustomFont>
    </TouchableOpacity>
  );
};

export default SignInUp;

const styles = StyleSheet.create({


  // default button with its default value
  signinButton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 45,
    borderRadius: 15,
    // position
    position: "absolute",
    bottom: "27%",
  },
  buttonNormal: {
    backgroundColor: "#FFD700",
  },

  buttonPressed: {
    backgroundColor: "#FFD700",
  },

  // Normal
  normalFont: {
    color: "#1e1e1e",
    fontSize: 17,
  },

  // Pressed
  pressedFont: {
    color: "1e1e1e",
    fontSize: 17,
  },


});
