import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Login extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Login"
                onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}