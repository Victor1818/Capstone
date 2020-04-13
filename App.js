import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppStart from './src/components/beforeHomeScreens/AppStartScreen';
import Login from './src/components/beforeHomeScreens/LoginScreen';
import SignUp from './src/components/beforeHomeScreens/SignUpScreen';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppStart" component={AppStart} options={{title: 'App Start'}}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Sign Up'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#046',
    alignItems: 'center',
    justifyContent: 'center',
  },
});











