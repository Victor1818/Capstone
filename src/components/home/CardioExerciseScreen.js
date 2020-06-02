import React, {Component} from 'react';
import {View, Button, Text, Image, ImageBackground, Platform, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export default class CardioExercise extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            exercise: props.route.params.exercise,
            currentLocation: "", 
            locationTimer: null,
            mapRegion: null,
        };
    }



    async componentDidMount() {
        let {status} = await Location.requestPermissionsAsync();

        if (status === "granted") {
            this.state.locationTimer = setInterval(async () => {
                let location = await Location.getCurrentPositionAsync({});
                let coords = `lat: ${location.coords.latitude} lon: ${location.coords.longitude}`;

                console.log(coords);
                this.setState({
                    mapRegion:{
                        longitude: location.coords.longitude,
                        latitude: location.coords.latitude,
                        longitudeDelta: 0.05,
                        latitudeDelta: 0.04
                    }
                });
            }, 5000);
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.state.locationTimer);
    }
    // async componentDidMount(){
    //     let {status} = await Location.requestPermissionsAsync();

    //     if (status === "granted") {
    //         this.state.locationTimer = setInterval(async () => {
    //             let location = await Location.getCurrentPositionAsync({});
    //             console.log(location);

    //             this.setState({
    //                 mapRegion: { 
    //                     latitude: location.coords.latitude, 
    //                     longitude: location.coords.longitude, 
    //                     latitudeDelta: 0.0922, 
    //                     longitudeDelta: 0.0421 
    //                 },
    //             });
    //         }, 1000);
    //     } 
    // }

    // componentWillUnmount() {
    //     clearInterval(this.state.locationTimer);
    // }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.state.exercise}</Text>
                    <MapView 
                        region={this.state.mapRegion} 
                        showsUserLocation={true}
                        // userLocationUpdateInterval={1000}
                        // userLocationFastestInterval={1000}
                        style={styles.mapStyle}
                    />
                                      
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AfterReport')}>
                        <Text>Finish</Text>
                    </TouchableOpacity>
                    
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity onPress={() => console.log('Click')}>
                            <Image source={require('../../icons/homeIcon.png')} style={{width: 40, height: 40}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => console.log('Click')}>
                            <Image source={require('../../icons/eventsIcon.png')} style={{width: 40, height: 40}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => console.log('Click')}>
                            <Image source={require('../../icons/goalsIcon.png')} style={{width: 40, height: 40}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('Click')}>
                            <Image source={require('../../icons/statsIcon.png')} style={{width: 40, height: 40}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('Click')}>
                            <Image source={require('../../icons/accountIcon.png')} style={{width: 40, height: 40}}/>
                        </TouchableOpacity>
                    </View>
                
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 500,
    },
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa',
        borderRadius: 14
    },
});