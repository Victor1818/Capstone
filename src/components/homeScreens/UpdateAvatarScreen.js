import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class UpdateAvatar extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Update"
                onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}