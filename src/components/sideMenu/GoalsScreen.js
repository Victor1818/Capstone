import React, {Component} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';

export default class Goals extends Component{
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{fontWeight: "bold"}}>Stationary</Text>
                    <View>
                        <Text>[Goal]</Text>
                        <Text>[Requirements]</Text>
                        <Text>Not Accomplished</Text>
                    </View>
                    <View>
                        <Text>[Goal]</Text>
                        <Text>[Requirements]</Text>
                        <Text>Not Accomplished</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight: "bold"}}>Cardio</Text>
                    <View>
                        <Text>[Goal]</Text>
                        <Text>[Requirements]</Text>
                        <Text>Not Accomplished</Text>
                    </View>
                    <View>
                        <Text>[Goal]</Text>
                        <Text>[Requirements]</Text>
                        <Text>Not Accomplished</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}