import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import LoginS from './App/Screens/LoginS';
import DetailBalanceIDR from './App/Screens/DetailBalanceIDR';
import Balance from './App/Screens/Balance';
import Foreign from './App/Screens/Foreign';
import Home from './App/Screens/Home';
import LoginStep from './App/Screens/LoginStep';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForeignConverter from './App/Screens/ForeignConverter';
import DetailPayment from './App/Screens/DetailPayment';
import SuccessTran from './App/Screens/SuccessTran';

const Stack = createNativeStackNavigator();
// <Home />

export default function App() {


  const header = {
    header:()=> null,
    animation:"slide_from_right"
  }



  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" options={header} component={Login} />
    <Stack.Screen name="LoginS" options={header} component={LoginS} />
    <Stack.Screen name="Home" options={header} component={Home} />
    <Stack.Screen name="DetailPayment" options={header} component={DetailPayment} />
    <Stack.Screen name="SuccessTran" options={header} component={SuccessTran} />
    <Stack.Screen name="ForeignConverter" options={header} component={ForeignConverter} />

    <Stack.Screen name="Foreign" options={header} component={Foreign} />
    <Stack.Screen name="DetailBalanceIDR" options={header} component={DetailBalanceIDR} />
    <Stack.Screen name="Balance" options={header} component={Balance} />
    
    </Stack.Navigator>
   
      </NavigationContainer>

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
