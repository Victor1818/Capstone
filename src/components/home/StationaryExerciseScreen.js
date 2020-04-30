import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class StationaryExercise extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>[Insert Exercise Name]</Text>
                <Text>[Goal (In Reps)]</Text>
                <Text>[Counter (In Reps)]</Text>
                <Button
                title="Finish"
                onPress={() => this.props.navigation.navigate('AfterReport')}/>



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