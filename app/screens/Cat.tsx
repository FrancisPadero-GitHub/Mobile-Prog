import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useState } from "react";

// This file also explain how to use State
// Props or in short of "Properties"
/*As a general rule, use props to configure a component when it renders.
 Use state to keep track of any component data that you expect to change over time.*/

type CatProps = {
  name: string;
};

// Pass in the parameters then you can put arguments inside from where did you import this file
const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  const [ownerName, setOwnerName] = useState<string | null>(null); // This mean its a either a string or null, you can use null to reset the value
  const [timesPetted, setTimePetted] = useState(0);

  return (
    <View style={styles.container}>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>

      <Button
        onPress={() => {
          setIsHungry(false);
          setOwnerName("Francis");
        }}
        disabled={!isHungry} // disabled if the button value is false and the value of the pros above will not change if ths one is not being disabled
        title={isHungry ? "Give me some food, Please!" : "Thank you!"}
      />

      <Button
        onPress={() => {
          setIsHungry(true);
          setOwnerName(null);
        }}
        disabled={isHungry}
        title="hungry?"
      />

      <Text> The one who fed the cat is {ownerName}</Text>

      {/*So basically the "source" here is a props to show what image should be shown */}
      <Image
        style={styles.catImage}
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
      />

      <Button
        onPress={
          () => setTimePetted(timesPetted + 1) // this one will increment the value 1 each if you press the button
        }
        title="Pet me"
      />

      <Text>You have petted the cat {timesPetted} times.</Text>
      <Button onPress={() => setTimePetted(0)} title="reset" />
    </View>
  );
};

const sampel = () => {
  return <></>;
};

export default Cat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  catImage: {
    width: 200,
    height: 200,
  },
});
