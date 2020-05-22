import React, {Component} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';

export default class Stats extends Component{
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{fontWeight: "bold"}}>Stationary</Text>
                    <View>
                        <Text>[Exercise]</Text>
                        <Text>[Best Time/Most Reps]</Text>
                    </View>
                    <View>
                        <Text>[Exercise]</Text>
                        <Text>[Best Time/Most Reps]</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight: "bold"}}>Cardio</Text>
                    <View>
                        <Text>[Exercise]</Text>
                        <Text>[Best Time/Most Reps]</Text>
                    </View>
                    <View>
                        <Text>[Exercise]</Text>
                        <Text>[Best Time/Most Reps]</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}