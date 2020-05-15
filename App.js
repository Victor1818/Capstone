import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
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
      <Stack.Screen name="AppStart" component={AppStart} options={{headerTitle: props => <ScreenHeader />}}/>
        
        {/* <Stack.Screen name="AppStart" component={AppStart} options={{title: 'App Start'}}/> */}
        <Stack.Screen name="Login" component={Login} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="CreateAvatar" component={CreateAvatar} options={{headerTitle: props => <ScreenHeader />}} />

        <Stack.Screen name="Home" component={Home} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="SelectExercise" component={SelectExercise} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="StationaryExercise" component={StationaryExercise} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="CardioExercise" component={CardioExercise} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="AfterReport" component={AfterReport} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="UpdateAvatar" component={UpdateAvatar} options={{headerTitle: props => <ScreenHeader />}} />
        
        {/* <Stack.Screen name="SideBarMenu"  component={SideMenu} /> */}

        {/* <Stack.Screen name="Events" component={Events} options={{title: 'Events'}} /> */}
        {/* <Stack.Screen name="Goals" component={Goals} options={{title: 'Goals'}} /> */}
        {/* <Stack.Screen name="Stats" component={Stats} options={{title: 'Stats'}} /> */}
        {/* <Stack.Screen name="Account" component={Account} options={{title: 'Account'}} /> */}
        {/* <Stack.Screen name="EditAccount" component={EditAccount} options={{title: 'Edit Account'}} /> */}
        {/* <Stack.Screen name="Help" component={Help} options={{title: 'Help'}} /> */}
        {/* <Stack.Screen name="AboutUs" component={AboutUs} options={{title: 'About Us'}} /> */}
        <Drawer.Screen name="Events" component={Events} options={{title: 'Events'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SideMenu = () =>{
  console.log('Check');
  // Drawer.toggleDrawer();

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

const ScreenHeader = () =>{
  return(
    <View style={styles.header}>
        <TouchableOpacity style={styles.hamburger} onPress={() => console.log('Click!')} >
          <Image source={require('./src/icons/hamburgerIcon.png')} style={{width: 40, height: 40}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logo} onPress={() => console.log('Click!')} >
          <Image source={require('./src/icons/insertImageHere.png')} style={{width: 40, height: 40}}/>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    width: '100%'
  },
  logo: {
    flex: 2
  },
  hamburger: {
    flex: 1
  }
});

