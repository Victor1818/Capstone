import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

export default class SignUp extends Component{

    varify = () =>{
        this.props.navigation.navigate('CreateAvatar');

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>First Name: </Text>
                <TextInput placeholder='First Name' />
                <Text>Last Name: </Text>
                <TextInput placeholder='Last Name' />
                <Text>Email: </Text>
                <TextInput placeholder='Email' />
                <Text>Password: </Text>
                <TextInput placeholder='Password' />
                <Button
                title="Sign Up"
                onPress={() => this.varify()}/>
            </View>
        );
    }
}