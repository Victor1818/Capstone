import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class AppStart extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                title="Go to Login"
                onPress={() => this.props.navigation.navigate('Login')}/>
                <Button
                title="Go to Sign Up"
                onPress={() => this.props.navigation.navigate('SignUp')}/>
            </View>
        )
    }
}