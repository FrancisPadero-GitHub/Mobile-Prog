import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

// Handling Text Input in React Native

const PizzaTranslator = () => {
  const [text, setText] = useState(""); // State manager

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Type a word to translate into pizza 🍕"
        onChangeText={newText => setText(newText)} // 
        defaultValue={text}
      />

      <Text>
        {text
          
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: 40,
    borderBlockColor: 'black',
    borderWidth: 1,
  },

  text: {
    fontSize: 42
  },

});
