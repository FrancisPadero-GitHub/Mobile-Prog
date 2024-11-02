import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import type { PropsWithChildren } from "react";

// Let ChatGPT explain this to you  I can't seem to understand the logic behind this one

// Props Declaration
type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[]; // Array parameters for you to add arguments of the values you want to be displayed i.e, column, row etc
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

// Main component that is responsible of rending shit from the screen
const PreviewLayout = ({
  children, // WHAT THE FUCK IS THIS FOR???
  label,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>

    {/* Main container that defines the layout of the buttons */}
    <View style={styles.row}>
      {values.map((value) => (
        // TouchableOpacity is a button
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

                                    {/*flexDirection: column or row or row-reverse or column-reverse*/} 
    <View style={[styles.container, { [label]: selectedValue }]}>
      {/* This component actually the responsible for the boxes to move or sortout */}
      {children}
    </View>

    
  </View>
);

const FlexDirect = () => {
  const [flexDirection, setFlextDirection] = useState("column"); // useState default value you can set this to any value you want ranging from the arguments of the value array you've given

  return (
    // <PreviewLayout></PreviewLayout> is a component call to pass arguments on the props as well as rendering it
    <PreviewLayout
      label="flexDirection" // This one is being used in the styling component of the view where boxes are moved out 
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setFlextDirection}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

export default FlexDirect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral", // Identical to tomato
    borderWidth: 0,
  },
  
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});
