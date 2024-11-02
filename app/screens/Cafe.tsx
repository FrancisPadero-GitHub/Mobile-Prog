import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, {useState} from "react";
import Cat from "./Cat"; // Arguments are being passed on here on this file

// This is all about props by the way or "properties"

const Cafe = () => {
  return (
    // the <> </> or fragments used for the component without any extra views or somehting just use it when importing component
    <> 
      {/*Arguments being passed down so that the parameter can use it 
          This the Cat.tsx is also used a component practice
      */}
      <Cat name="Maki" />
    </>
  );
};

export default Cafe;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },


});
