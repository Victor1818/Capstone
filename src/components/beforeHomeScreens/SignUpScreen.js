import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class SignUp extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Submit"
                onPress={() => this.props.navigation.navigate('CreateAvatar')}/>
            </View>
        );
    }
}