import React, {Component} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';


export default class Login extends Component{

    
    verify = () =>{


        // this.props.navigation.navigate('Eve')
        this.props.navigation.navigate('Home');
        // this.props.navigation.navigate('Events')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Email: </Text>
                <TextInput placeholder='Email' autoCompleteType='email' />
                <Text>Password: </Text>
                <TextInput placeholder='Password' autoCompleteType='password' />
                <TouchableOpacity style={styles.button} onPress={() => this.verify()}>
                    <Text>Login</Text>
                </TouchableOpacity>
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
    },
    text:{
        color: '#C8C8C8'
    },
});