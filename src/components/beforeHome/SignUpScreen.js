import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

export default class SignUp extends Component{

    varify = () =>{
        this.props.navigation.navigate('CreateAvatar');

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput placeholder='First Name' />
                <TextInput placeholder='Last Name' />
                <TextInput placeholder='Email' />
                <TextInput placeholder='Password' />
                <Button
                title="Sign Up"
                onPress={() => this.varify()}/>
            </View>
        );
    }
}