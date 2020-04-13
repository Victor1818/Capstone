import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Account extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Edit"
                onPress={() => this.props.navigation.navigate('EditAccount')}/>
            </View>
        );
    }
}