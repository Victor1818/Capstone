import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';


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
                <Button
                title="Login"
                onPress={() => this.verify()}/>
            </View>
        );
    }
}