import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class CreateAvatar extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Finish"
                onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}