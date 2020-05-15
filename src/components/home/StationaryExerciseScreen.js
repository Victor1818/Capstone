import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { Pedometer } from 'expo-sensors';


export default class StationaryExercise extends Component{

    

    constructor(props){
        super(props);
        this.state = {count: 0, exercise: props.route.params.exercise, speed: props.route.params.speed};
    }

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        setTimeout(() => {this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps,
            });
        })}, this.state.speed);
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {     
        if(this.state.currentStepCount == null || this.state.currentStepCount == 1){
            var counter = 0;
        }else{
            var counter = this.state.currentStepCount - 1
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.exercise}</Text>
                <Text>[Goal (In Reps)]</Text>
                {/* Put function in text Below*/}
                <Text>{counter}</Text>
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






//   render() {
//     return (
//       <View style={styles.container}>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});