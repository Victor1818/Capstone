import React, {Component} from 'react';
import {View, Button, Text, Image} from 'react-native';

export default class Account extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: 50, width: 50, backgroundColor: '#aaa'}} />
                <Text>[First Name] [Last Initial]</Text>
                <Button
                title="Edit"
                onPress={() => this.props.navigation.navigate('EditAccount')}/>
                <Text>First Name: [First Name]</Text>
                <Text>Last Name: [Last Name]</Text>
                <Text>Email: [Email]</Text>
                <Text>Password: [Password]</Text>


            </View>
        );
    }
}