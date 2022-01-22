import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import BottomTab from "./screen/BottomTab";
import Login from "./screen/Login";
import SignUp from "./screen/Signup";

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: '' }} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ title: '',headerShown: false }} />
    </Stack.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}



