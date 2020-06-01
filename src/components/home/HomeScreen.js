import React, {Component} from 'react';
import {View, Button, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default class Home extends Component{
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate(
                        'SelectExercise', 
                        {title: 'Full Body Exercise', category: 'FullBodyExercise', exercises: ['Jumping Jacks', 'Squat Jump', "Skaters"]}
                    )}>
                    <Text>Full Body</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate(
                        'SelectExercise', 
                        {title: 'Cardio Exercise', category: 'CardioExercise', exercises: ['Walking', 'Jogging', 'Cycling']}
                    )}>
                    <Text>Cardio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('UpdateAvatar')}>
                    <Text>Update Avatar</Text>
                </TouchableOpacity>


                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../../icons/homeIcon.png')} style={styles.image} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Goals')}>
                        <Image source={require('../../icons/goalsIcon.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Stats')}>
                        <Image source={require('../../icons/statsIcon.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                        <Image source={require('../../icons/eventsIcon.png')} style={styles.image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}>
                        <Image source={require('../../icons/accountIcon.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#087891'
    },
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa',
        borderRadius: 14
    },
    image:{
        width: 40,
        height: 40
    },
    nav:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    }
});