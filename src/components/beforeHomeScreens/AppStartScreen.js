import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class AppStart extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Sign Up"
                onPress={() => this.props.navigation.navigate('SignUp')}/>
                <Button
                title="Login"
                onPress={() => this.props.navigation.navigate('Login')}/>
            </View>
        )
    }
}