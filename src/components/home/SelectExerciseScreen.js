import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class SelectExercise extends Component{

    constructor(props){
        super(props);
        this.state = {title: props.route.params.title, category: props.route.params.category, exercises: props.route.params.exercises};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.title}</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[0], speed: 6150})}>
                    <Text style={styles.text}>{this.state.exercises[0]}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[1], speed: 7200})}>
                    <Text style={styles.text}>{this.state.exercises[1]}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(`${this.state.category}`, {exercise: this.state.exercises[2], speed: 1800})}>
                    <Text style={styles.text}>{this.state.exercises[2]}</Text>
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
        width: '80%',
        height: '20%',
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
        color: '#310273',
        fontSize: 34,
        textAlign: 'center',
        paddingVertical: 22
    },
    title:{
        color: '#f2f2f2',
        fontSize: 40
    }
});