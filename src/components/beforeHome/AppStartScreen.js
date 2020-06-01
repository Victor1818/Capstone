import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class AppStart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Body Boosters</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Login</Text>
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
        backgroundColor: '#087891'
    },
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa',
        borderRadius: 14
    },
    text:{
        color: '#C8C8C8'
    },
});