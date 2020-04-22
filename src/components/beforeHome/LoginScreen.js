import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';


export default class Login extends Component{

    
    verify = () =>{



        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput placeholder='Email' autoCompleteType='email'  />
                <TextInput placeholder='Password' autoCompleteType='password' />
                <Button
                title="Login"
                onPress={() => this.verify()}/>
            </View>
        );
    }
}