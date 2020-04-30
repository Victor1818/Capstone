import React, {Component} from 'react';
import {View, Button, Text, TextInput, Image} from 'react-native';
import UpdateAvatar from '../home/UpdateAvatarScreen';

export default class EditAccount extends Component{
    update = () =>{
        this.props.navigation.navigate('Account')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: 50, width: 50, backgroundColor: '#aaa'}} />
                <Text>First Name: </Text>
                <TextInput placeholder='First Name' />
                <Text>Last Name: </Text>
                <TextInput placeholder='Last Name' />
                <Text>Email: </Text>
                <TextInput placeholder='Email' />
                <Text>Password: </Text>
                <TextInput placeholder='Password' />                
                <Button
                title="Update"
                onPress={() => this.update()}/>
            </View>
        );
    }
}