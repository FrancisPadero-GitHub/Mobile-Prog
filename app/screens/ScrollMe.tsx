import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const ScrollMe = () => {
  return (
    <ScrollView maximumZoomScale={3}>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>If you like</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>Scrolling down</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>What's the best</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 96 }}>Framework around?</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{ fontSize: 80 }}>React Native</Text>
    </ScrollView>
  );
};

export default ScrollMe;

const styles = StyleSheet.create({});
