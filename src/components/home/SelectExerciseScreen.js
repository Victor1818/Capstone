import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class SelectExercise extends Component{

    constructor(props){
        super(props);
        this.state = {title: props.route.params.title, category: props.route.params.category, exercises: props.route.params.exercises};
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.title}</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[0], speed: 6150})}>
                    <Text>{this.state.exercises[0]}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[1], speed: 7200})}>
                    <Text>{this.state.exercises[1]}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[2], speed: 1800})}>
                    <Text>{this.state.exercises[2]}</Text>
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
        backgroundColor: '#aaa'
    }
});