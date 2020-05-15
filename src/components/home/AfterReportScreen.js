import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default class AfterReport extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>[After Report Information]</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Return Home</Text>
                </TouchableOpacity>






                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <TouchableOpacity onPress={() => console.log('Click')}>
                        <Image source={require('../../icons/homeIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => console.log('Click')}>
                        <Image source={require('../../icons/eventsIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => console.log('Click')}>
                        <Image source={require('../../icons/goalsIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Click')}>
                        <Image source={require('../../icons/statsIcon.png')} style={{width: 40, height: 40}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Click')}>
                        <Image source={require('../../icons/accountIcon.png')} style={{width: 40, height: 40}}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#aaa'
    }
});