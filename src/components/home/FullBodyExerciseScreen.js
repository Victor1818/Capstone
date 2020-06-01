import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { Pedometer } from 'expo-sensors';


export default class FullBodyExercise extends Component{

    

    constructor(props){
        super(props);
        this.state = {count: 0, exercise: props.route.params.exercise, speed: props.route.params.speed};
    }

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        setTimeout(() => {this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps,
            });
        })}, this.state.speed);
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {     
        if(this.state.currentStepCount == null || this.state.currentStepCount == 1){
            var counter = 0;
        }else{
            var counter = this.state.currentStepCount - 1
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.exercise}</Text>
                <Text>[Goal (In Reps)]</Text>
                {/* Put function in text Below*/}
                <Text>{counter}</Text>

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
        );
    }
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa',
        borderRadius: 14
    }
});