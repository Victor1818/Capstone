import React, {Component} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';


export default class Login extends Component{

    
    verify = () =>{


        // this.props.navigation.navigate('Eve')
        this.props.navigation.navigate('Home');
        // this.props.navigation.navigate('Events')
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.form}>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput style={styles.text} placeholder='Email' autoCompleteType='email' />
                </View>    
                <View style={styles.form}>
                    <Text style={styles.text}>Password: </Text>
                    <TextInput style={styles.text} placeholder='Password' autoCompleteType='password' />
                </View>    
                <TouchableOpacity style={styles.button} onPress={() => this.verify()}>
                    <Text style={styles.nextButton}>Login</Text>
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
        margin: 4,
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