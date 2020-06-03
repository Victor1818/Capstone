import React, {Component} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

export default class SignUp extends Component{

    constructor(){
        super();
        this.state = { firstName: '', lastName: '', email: '', password: '' };
    }

    verify = () =>{
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
            this.props.navigation.navigate('CreateAvatar');
        }
        

    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.form}>
                    <Text style={styles.text}>First Name: </Text>
                    <TextInput style={styles.text} placeholder='First Name' value={this.state.firstName} onChangeText={(text) => this.setState({firstName: text})} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.text}>Last Name: </Text>
                    <TextInput style={styles.text} placeholder='Last Name' value={this.state.lastName} onChangeText={(text) => this.setState({lastName: text})} />
                </View>
                
                <View style={styles.form}>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput style={styles.text} placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({email: text})} />
                </View>
                
                <View style={styles.form}>
                    <Text style={styles.text}>Password: </Text>
                    <TextInput style={styles.text} placeholder='Password' value={this.state.password} onChangeText={(text) => this.setState({password: text})} />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={() => this.verify()}>
                    <Text style={styles.nextButton}>Sign Up</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#310273',
        flexDirection: 'column',
    },
    button: {
        padding: 10,
        margin: 50,
        backgroundColor: '#A7F205',
        borderRadius: 14,
        height: '11%',
        width: '40%',
    },
    form:{
        flexDirection: 'row'
    },
    text:{
        color: '#f2f2f2',
        fontSize: 20,
        paddingVertical: 10
    }, 
    nextButton:{
        color: '#310273', 
        fontSize: 30, 
        textAlign: 'center', 
    }
});