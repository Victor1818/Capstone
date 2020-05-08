import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { Pedometer } from 'expo-sensors';


export default class StationaryExercise extends Component{

    constructor(){
        super();
        this.state = {count: 0};
    }

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
        this.setState({
            currentStepCount: result.steps,
        });
        });
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>[Insert Exercise Name]</Text>
                <Text>[Goal (In Reps)]</Text>
                <Text>{this.state.currentStepCount}</Text>
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