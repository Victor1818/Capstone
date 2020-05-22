import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default class Account extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: 50, width: 50, backgroundColor: '#aaa'}} />
                <Text>[First Name] [Last Initial]</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('EditAccount')}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <Text>First Name: [First Name]</Text>
                <Text>Last Name: [Last Name]</Text>
                <Text>Email: [Email]</Text>
                <Text>Password: [Password]</Text>


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