import React, {Component} from 'react';
import {View, TouchableOpacity, Text, TextInput, Image, StyleSheet} from 'react-native';
import UpdateAvatar from './UpdateAvatarScreen';

export default class EditAccount extends Component{
    constructor(){
        super();
        this.state = { firstName: '', lastName: '', email: '', password: '' };
    }

    varify = () =>{
        let pass = true;

        if(this.state.firstName.length == 0){
            console.log('First Name Failed');
            pass = false;
        }
        if(this.state.lastName.length == 0){
            console.log('Last Name Failed');
            pass = false;
        }
        if(this.state.email.length == 0){
            console.log('Email Failed');
            pass = false;
        }
        if(this.state.password.length == 0){
            console.log('Password Failed');
            pass = false;
        }

        if(pass){
            console.log('Success');
            this.props.navigation.navigate('Account');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: 50, width: 50, backgroundColor: '#aaa'}} />
                <Text>First Name: </Text>
                <TextInput placeholder='First Name' value={this.state.firstName} onChangeText={(text) => this.setState({firstName: text})} />
                <Text>Last Name: </Text>
                <TextInput placeholder='Last Name' value={this.state.lastName} onChangeText={(text) => this.setState({lastName: text})} />
                <Text>Email: </Text>
                <TextInput placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({email: text})} />
                <Text>Password: </Text>
                <TextInput placeholder='Password' value={this.state.password} onChangeText={(text) => this.setState({password: text})} />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Account')}>
                    <Text>Update</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa'
    }
});