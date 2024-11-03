import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import EnterName from "../../components/EnterName"; // being reused in this file from another file hence the "reusability code"

// Sample function being called inside another function but used a curly braces
const getFullname = (
    firstName: string,
    lastName: string,
    middleName: string,

) => {
    return firstName + " " + lastName + " " + middleName;
};


const Practice = () => {
    const name = 'Francis'; // JSX allows variables inside a function
    return (
        <View>
            <Text> Hellow, I am...</Text>
            {/* imported from another file from components folder for reusability of the text input */}
            <EnterName /> 
        </View>
  );
};

// You can render this one in multiple places with repeating your code hence the name "components" 
// which you can reuse pieces of code.





export default Practice;

const styles = StyleSheet.create({


});
