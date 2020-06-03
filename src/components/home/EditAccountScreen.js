import React, {Component} from 'react';
import {View, TouchableOpacity, Text, TextInput, Image, StyleSheet} from 'react-native';
import UpdateAvatar from './UpdateAvatarScreen';

export default class EditAccount extends Component{
    constructor(){
        super();
        this.state = { firstName: '', lastName: '', email: '', password: '' };
    }

    varify = () =>{
        let pass = true;

        if(this.state.firstName.length == 0){
            console.log('First Name Failed');
            pass = false;
        }
        if(this.state.lastName.length == 0){
            console.log('Last Name Failed');
            pass = false;
        }
        if(this.state.email.length == 0){
            console.log('Email Failed');
            pass = false;
        }
        if(this.state.password.length == 0){
            console.log('Password Failed');
            pass = false;
        }

        if(pass){
            console.log('Success');
            this.props.navigation.navigate('Account');
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Edit Account</Text>

                <Image style={{height: 100, width: 100, backgroundColor: '#aaa'}} />

                <View style={styles.form}>
                    <Text style={styles.text}>First Name: </Text>
                    <TextInput style={styles.text} placeholder='First Name' value={this.state.firstName} onChangeText={(text) => this.setState({firstName: text})} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.text}>Last Name: </Text>
                    <TextInput style={styles.text} placeholder='Last Name' value={this.state.lastName} onChangeText={(text) => this.setState({lastName: text})} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput style={styles.text} placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({email: text})} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.text}>Password: </Text>
                    <TextInput style={styles.text} placeholder='Password' value={this.state.password} onChangeText={(text) => this.setState({password: text})} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Account')}>
                    <Text style={styles.nextButton}>Update</Text>
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
    },
    button: {
        padding: 10,
        margin: 50,
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
    form:{
        flexDirection: 'row'
    },
    text:{
        color: '#f2f2f2',
        fontSize: 20,
        paddingVertical: 10
    }, 
    nextButton:{
        color: '#310273', 
        fontSize: 30, 
        textAlign: 'center', 
    },
    title:{
        color: '#f2f2f2',
        fontSize: 40
    },
});