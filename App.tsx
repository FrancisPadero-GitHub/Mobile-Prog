// App.tsx is used for the routing of all the screens you have in app/screens


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JustifyConts from './app/screens/JustifyConts';

// Variable for stack navigator which will be used below
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "React Native" component={JustifyConts}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


