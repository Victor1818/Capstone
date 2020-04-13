import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Home extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Stationary Exercise"
                onPress={() => this.props.navigation.navigate('SelectExercise')}/>
                <Button
                title="Cardio Exercise"
                onPress={() => this.props.navigation.navigate('SelectExercise')}/>
                <Button
                title="Update Avatar"
                onPress={() => this.props.navigation.navigate('UpdateAvatar')}/>
            </View>
        );
    }
}