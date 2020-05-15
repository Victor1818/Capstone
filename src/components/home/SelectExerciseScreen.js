import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class SelectExercise extends Component{

    constructor(props){
        super(props);
        this.state = {title: props.route.params.title, category: props.route.params.category, exercises: props.route.params.exercises};
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.title}</Text>
                <Button
                title={this.state.exercises[0]}
                onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[0], speed: 6150})}/>
                <Button
                title={this.state.exercises[1]}
                onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[1], speed: 7200})}/>
                <Button
                title={this.state.exercises[2]}
                onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[2], speed: 2210})}/>


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