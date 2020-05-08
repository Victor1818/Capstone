import React, {Component} from 'react';
import {View, Button, Text, Image, ImageBackground} from 'react-native';

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

      componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
          position => {
            const { coordinate, routeCoordinates, distanceTravelled } = this.state;
            const { latitude, longitude } = position.coords;
            
            const newCoordinate = {
              latitude,
              longitude
            };
            if (Platform.OS === "android") {
              if (this.marker) {
                this.marker._component.animateMarkerToCoordinate(
                  newCoordinate,
                  500
                );
               }
             } else {
               coordinate.timing(newCoordinate).start();
             }
             this.setState({
               latitude,
               longitude,
               routeCoordinates: routeCoordinates.concat([newCoordinate]),
               distanceTravelled:
               distanceTravelled + this.calcDistance(newCoordinate),
               prevLatLng: newCoordinate
             });
           },
           error => console.log(error),
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>[Insert Exercise Name]</Text>
                <Text>[Goal (In Reps)]</Text>
                <Image style={{width: 150, height: 150, backgroundColor: '#aaa'}} />

                <Button
                title="Finish"
                onPress={() => this.props.navigation.navigate('AfterReport')}/>



                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Button title='QL1' />
                    <Text>|</Text>
                    <Button title='QL2' />
                    <Text>|</Text>
                    <Button title='QL3' />
                    <Text>|</Text>
                    <Button title='QL4' />
                    <Text>|</Text>
                    <Button title='QL5' />
                </View>

            </View>
        );
    }
}