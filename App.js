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
          headerTitle: props => <ScreenHeaderStart />, 
          headerStyle: {
            backgroundColor: '#A7F205',
            height: 0,
          },
        }}/>

        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
        }}/>
        
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="CreateAvatar" 
          component={CreateAvatar} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>



        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>

        <Stack.Screen 
          name="SelectExercise" 
          component={SelectExercise} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="FullBodyExercise" 
          component={FullBodyExercise} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="CardioExercise" 
          component={CardioExercise} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="AfterReport" 
          component={AfterReport} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="UpdateAvatar" 
          component={UpdateAvatar} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        


        <Stack.Screen 
          name="Events" 
          component={Events} 
          options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="Goals" 
          component={Goals} options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="Stats" 
          component={Stats} options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="Account" 
          component={Account} options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>
        
        <Stack.Screen 
          name="EditAccount" 
          component={EditAccount} options={{
            headerTitle: props => <ScreenHeader />,
            headerStyle: {
              backgroundColor: '#A7F205',
              height: 75,
            }
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ScreenHeader = () =>{
  return(
    <View style={styles.header}>
        <TouchableOpacity style={styles.logoContainer} >
          <Image source={require('./src/icons/logo.png')} style={styles.logo}/>
        </TouchableOpacity>
    </View>
  );
}

const ScreenHeaderStart = () =>{
  return(
    <View style={styles.header}>
        
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
    width: 61,
    height: 40
  },
});

