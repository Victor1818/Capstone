import React, {Component} from 'react';
import {View, Button, Text, Image, ImageBackground, Platform, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

export default class CardioExercise extends Component{

    constructor(props) {
        super(props);
        this.state = {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          routeCoordinates: [],
          distanceTravelled: 0,
          prevLatLng: {},
          coordinate: new AnimatedRegion({
           latitude: LATITUDE,
           longitude: LONGITUDE
          })
        };
      }


    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>[Insert Exercise Name]</Text>
                    <Text>[Goal (In Reps)]</Text>
                    <Image style={{width: 150, height: 150, backgroundColor: '#aaa'}} />
                    
                    <Button
                    title="Finish"
                    onPress={() => this.props.navigation.navigate('AfterReport')}/>
                    
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
