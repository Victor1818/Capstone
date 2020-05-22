import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class AppStart extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Body Boosters</Text>
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
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa'
    }
});