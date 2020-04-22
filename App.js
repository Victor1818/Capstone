import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppStart from './src/components/beforeHome/AppStartScreen';
import Login from './src/components/beforeHome/LoginScreen';
import SignUp from './src/components/beforeHome/SignUpScreen';
import CreateAvatar from './src/components/beforeHome/CreateAvatarScreen';

import Home from './src/components/home/HomeScreen';
import SelectExercise from './src/components/home/SelectExerciseScreen';
import StationaryExercise from './src/components/home/StationaryExerciseScreen';
import CardioExercise from './src/components/home/CardioExerciseScreen';
import AfterReport from './src/components/home/AfterReportScreen';
import UpdateAvatar from './src/components/home/UpdateAvatarScreen';

import Events from './src/components/sideMenu/EventsScreen';
import Goals from './src/components/sideMenu/GoalsScreen';
import Stats from './src/components/sideMenu/StatsScreen';
import Account from './src/components/sideMenu/AccountScreen';
import EditAccount from './src/components/sideMenu/EditAccountScreen';
import Help from './src/components/sideMenu/HelpScreen';
import AboutUs from './src/components/sideMenu/AboutUsScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        
        <Stack.Screen name="SideBarMenu"  component={SideMenu} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

function SideMenu({navigation}){
  console.log('passes');
  Drawer.toggleDrawer();
  console.log('passessssssssssssss');

  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Events" component={Events} options={{title: 'Events'}} />
      <Drawer.Screen name="Goals" component={Goals} options={{title: 'Goals'}} />
      <Drawer.Screen name="Stats" component={Stats} options={{title: 'Stats'}} />
      <Drawer.Screen name="Account" component={Account} options={{title: 'Account'}} />
      <Drawer.Screen name="EditAccount" component={EditAccount} options={{title: 'Edit Account'}} />
      <Drawer.Screen name="Help" component={Help} options={{title: 'Help'}} />
      <Drawer.Screen name="AboutUs" component={AboutUs} options={{title: 'About Us'}} />
    </Drawer.Navigator>
  );
}






