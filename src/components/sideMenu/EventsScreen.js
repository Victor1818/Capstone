import React, {Component} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';

export default class Events extends Component{
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{fontWeight: "bold"}}>Stationary</Text>
                    <View>
                        <Text>[Event]</Text>
                        <Text>[Requirement]</Text>
                        <Text>[Time Left/To Start]</Text>
                    </View>
                    <View>
                        <Text>[Event]</Text>
                        <Text>[Requirement]</Text>
                        <Text>[Time Left/To Start]</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight: "bold"}}>Cardio</Text>
                    <View>
                        <Text>[Event]</Text>
                        <Text>[Requirement]</Text>
                        <Text>[Time Left/To Start]</Text>
                    </View>
                    <View>
                        <Text>[Event]</Text>
                        <Text>[Requirement]</Text>
                        <Text>[Time Left/To Start]</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}