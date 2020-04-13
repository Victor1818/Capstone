import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class SelectExercise extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="[Insert Exercise]"
                onPress={() => this.props.navigation.navigate('StationaryExercise')}/>
                <Button
                title="[Insert Exercise]"
                onPress={() => this.props.navigation.navigate('StationaryExercise')}/>
                <Button
                title="[Insert Exercise]"
                onPress={() => this.props.navigation.navigate('CardioExercise')}/>
                <Button
                title="[Insert Exercise]"
                onPress={() => this.props.navigation.navigate('CardioExercise')}/>
            </View>
        );
    }
}