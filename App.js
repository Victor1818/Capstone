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
import FullBodyExercise from './src/components/home/FullBodyExerciseScreen';
import CardioExercise from './src/components/home/CardioExerciseScreen';
import AfterReport from './src/components/home/AfterReportScreen';
import UpdateAvatar from './src/components/home/UpdateAvatarScreen';

import Events from './src/components/home/EventsScreen';
import Goals from './src/components/home/GoalsScreen';
import Stats from './src/components/home/StatsScreen';
import Account from './src/components/home/AccountScreen';
import EditAccount from './src/components/home/EditAccountScreen';


const Stack = createStackNavigator();

export default App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="AppStart" 
        component={AppStart} 
        options={{
          headerTitle: props => <ScreenHeader />, 
          headerStyle: {
            backgroundColor: '#a3b',
            height: 75,
          },
        }}/>
        
        <Stack.Screen name="Login" component={Login} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="CreateAvatar" component={CreateAvatar} options={{headerTitle: props => <ScreenHeader />}} />

        <Stack.Screen name="Home" component={Home} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="SelectExercise" component={SelectExercise} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="FullBodyExercise" component={FullBodyExercise} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="CardioExercise" component={CardioExercise} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="AfterReport" component={AfterReport} options={{headerTitle: props => <ScreenHeader />}} />
        <Stack.Screen name="UpdateAvatar" component={UpdateAvatar} options={{headerTitle: props => <ScreenHeader />}} />
        
        <Stack.Screen name="Events" component={Events} options={{title: 'Events'}} /> 
        <Stack.Screen name="Goals" component={Goals} options={{title: 'Goals'}} />
        <Stack.Screen name="Stats" component={Stats} options={{title: 'Stats'}} />
        <Stack.Screen name="Account" component={Account} options={{title: 'Account'}} />
        <Stack.Screen name="EditAccount" component={EditAccount} options={{title: 'Edit Account'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ScreenHeader = () =>{
  return(
    <View style={styles.header}>
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

  },
  logo: {

  },
});

