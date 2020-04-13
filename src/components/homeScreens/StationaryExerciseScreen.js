import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class StationaryExercise extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Finish"
                onPress={() => this.props.navigation.navigate('AfterReport')}/>
            </View>
        );
    }
}