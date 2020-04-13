import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppStart from './src/components/beforeHomeScreens/AppStartScreen';
import Login from './src/components/beforeHomeScreens/LoginScreen';
import SignUp from './src/components/beforeHomeScreens/SignUpScreen';
import CreateAvatar from './src/components/beforeHomeScreens/CreateAvatarScreen';
import Home from './src/components/homeScreens/HomeScreen';
import SelectExercise from './src/components/homeScreens/SelectExerciseScreen';
import StationaryExercise from './src/components/homeScreens/StationaryExerciseScreen';
import CardioExercise from './src/components/homeScreens/CardioExerciseScreen';
import AfterReport from './src/components/homeScreens/AfterReportScreen';
import UpdateAvatar from './src/components/homeScreens/UpdateAvatarScreen';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppStart" component={AppStart} options={{title: 'App Start'}}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Sign Up'}} />
        <Stack.Screen name="CreateAvatar" component={CreateAvatar} options={{title: 'Create Avatar'}} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="SelectExercise" component={SelectExercise} options={{title: 'Select Exercise'}} />
        <Stack.Screen name="StationaryExercise" component={StationaryExercise} options={{title: 'Stationary Exercise'}} />
        <Stack.Screen name="CardioExercise" component={CardioExercise} options={{title: 'Cardio Exercise'}} />
        <Stack.Screen name="AfterReport" component={AfterReport} options={{title: 'After Report'}} />
        <Stack.Screen name="UpdateAvatar" component={UpdateAvatar} options={{title: 'Update Avatar'}} />
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











