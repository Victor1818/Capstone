import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import UpdateAvatar from '../home/UpdateAvatarScreen';

export default class EditAccount extends Component{
    update = () =>{
        this.props.navigation.navigate('Account')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput placeholder='First Name' />
                <TextInput placeholder='Last Name' />
                <TextInput placeholder='Email' />
                <TextInput placeholder='Password' />                
                <Button
                title="Update"
                onPress={() => this.update()}/>
            </View>
        );
    }
}