import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class AfterReport extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Return Home"
                onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}