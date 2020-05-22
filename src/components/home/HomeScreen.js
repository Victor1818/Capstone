import React, {Component} from 'react';
import {View, Button, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default class Home extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate(
                        'SelectExercise', 
                        {title: 'Full Body Exercise', category: 'FullBodyExercise', exercises: ['Jumping Jacks', 'Squat Jump', "Skaters"]})
                    }>
                    <Text>Full Body</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate(
                        'SelectExercise', 
                        {title: 'Cardio Exercise', category: 'CardioExercise', exercises: ['Walking', 'Jogging', 'Cycling']})}>
                    <Text>Cardio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('UpdateAvatar')}>
                    <Text>Update Avatar</Text>
                </TouchableOpacity>


                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../../icons/homeIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Goals')}>
                        <Image source={require('../../icons/goalsIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Stats')}>
                        <Image source={require('../../icons/statsIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                        <Image source={require('../../icons/eventsIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}>
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