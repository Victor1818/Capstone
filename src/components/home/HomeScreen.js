import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Home extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Button 
                title='Side Bar Menu'
                onPress={() => this.props.navigation.navigate('SideBarMenu')} /> */}
                <Button
                title="Stationary Exercise"
                onPress={() => this.props.navigation.navigate('SelectExercise', {title: 'Stationary Exercise', category: 'StationaryExercise', exercises: ['Jumping Jacks', 'Squat Jump', "Skaters"]})}/>
                <Button
                title="Cardio Exercise"
                onPress={() => this.props.navigation.navigate('SelectExercise', {title: 'Cardio Exercise', category: 'CardioExercise', exercises: ['Walking', 'Jogging', 'Cycling']})}/>
                <Button
                title="Update Avatar"
                onPress={() => this.props.navigation.navigate('UpdateAvatar')}/>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Button title='QL1' />
                    <Text>|</Text>
                    <Button title='QL2' />
                    <Text>|</Text>
                    <Button title='QL3' />
                    <Text>|</Text>
                    <Button title='QL4' />
                    <Text>|</Text>
                    <Button title='QL5' />
                </View>

            </View>
        );
    }
}