<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
// App.tsx is used for the routing of all the screens you have in app/screens

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "./app/screens/Test";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// Variable for stack navigator which will be used below
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <WelcomeScreen />
    </>
  );
}
>>>>>>> Stashed changes
