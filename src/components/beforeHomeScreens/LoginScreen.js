import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Login extends Component{
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login</Text>
            <Button
            title="App Start Button"
            onPress={() => this.props.navigation.navigate('AppStart')}/>
        </View>
        );
    }
}