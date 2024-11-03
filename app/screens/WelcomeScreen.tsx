import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import CustomFont from "../../components/CustomFont";
import SignInUp from "../../components/SignInUp";
import LinkButton from "../../components/LinkButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blackCont}></View>

      <CustomFont style={[styles.commonQuote, styles.heading]} fontType="Bold">
        Let's Get Started!
      </CustomFont>

      <CustomFont style={[styles.commonQuote, styles.quote1]} fontType="Bold">
        Pour over opportunities
      </CustomFont>

      <CustomFont style={[styles.commonQuote, styles.quote2]} fontType="Bold">
        and brew up your brightest future with
      </CustomFont>


      {/* The logo will overlap the black container because of the heirarchy */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/img/BrewScholar.png")}
          resizeMode="contain"
        />
      </View>

      {/* Imported form components to reuse it */}
      <SignInUp name = "Sign Up"/>

      <LinkButton name = "Already have an account? Login" />

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    width: "50%",
    height: "25%",

    // position
    position: "absolute",
    top: "40%",
  },

  img: {
    aspectRatio: 0.6, // this one somehow do work on other screensizes !!
  },

  commonQuote: {
    color: '#1e1e1e',
    fontSize: 15,
    letterSpacing: 2,
    textAlign: 'center',
    position: 'absolute',
  },
  quote1: {
    top: '33%',
  },
  quote2: {
    top: '36%',
  },
  heading: {
    fontSize: 30,
    letterSpacing: 1.5,
    top: '10%',
  },

  blackCont: {
    backgroundColor: '#1e1e1e',
    width: "100%",
    height: "45%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },


});
