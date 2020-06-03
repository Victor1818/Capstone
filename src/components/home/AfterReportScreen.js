import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default class AfterReport extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>After Report</Text>
                <Text style={styles.text}>[After Report Information]</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.nextButton}>Home</Text>
                </TouchableOpacity>

                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../../icons/homeIcon.png')} style={styles.image1} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Goals')}>
                        <Image source={require('../../icons/goalsIcon.png')} style={styles.image2} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Stats')}>
                        <Image source={require('../../icons/statsIcon.png')} style={styles.image3} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')}>
                        <Image source={require('../../icons/eventsIcon.png')} style={styles.image4} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}>
                        <Image source={require('../../icons/accountIcon.png')} style={styles.image5}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#310273',
        flexDirection: 'column',
        paddingBottom: 60,
        justifyContent: 'space-evenly'
    },
    button: {
        padding: 10,
        margin: 4,
        backgroundColor: '#A7F205',
        borderRadius: 14,
        height: '11%',
        width: '40%',
    },
    image1:{
        width: 43,
        height: 40
    },
    image2:{
        width: 41,
        height: 40
    },
    image3:{
        width: 60,
        height: 40
    },
    image4:{
        width: 38.3,
        height: 40
    },
    image5:{
        width: 39.6,
        height: 40
    },
    nav:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        backgroundColor: '#ff6000',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: '100%'
    },
    text:{
        color: '#f2f2f2',
        fontSize: 20,
        paddingVertical: 10
    }, 
    title:{
        color: '#f2f2f2',
        fontSize: 40
    },
    nextButton:{
        color: '#310273', 
        fontSize: 30, 
        textAlign: 'center', 
    },
});