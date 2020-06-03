import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class AppStart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../icons/logo.png')} style={styles.image} />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#310273',
        flexDirection: 'column',
        paddingBottom: 60,
        justifyContent: 'space-evenly'
    },
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#A7F205',
        borderRadius: 14,
        width: '80%',
        height: '20%',
    },
    text:{
        color: '#310273',
        fontSize: 34,
        textAlign: 'center',
        paddingVertical: 30
    },
    image:{
        width: 300,
        height: 170
    }
});