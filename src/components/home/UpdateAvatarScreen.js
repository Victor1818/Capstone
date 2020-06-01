import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Picker, Slider, StyleSheet, Image} from 'react-native';

export default class UpdateAvatar extends Component{
    constructor(){
      super();
      this.state = { avatar: '', eyes: 'eyes1', nose: 'nose2', mouth: 'mouth2', r: 0, g: 0, b: 0 };
  }

  render() {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={{uri: `https://api.adorable.io/avatars/face/${this.state.eyes}/${this.state.nose}/${this.state.mouth}/${this.state.r.toString(16)}${this.state.g.toString(16)}${this.state.b.toString(16)}/200.png`}} style={{height: 200, width: 200, borderRadius: 20}} />
              <Picker selectedValue={this.state.eyes} style={{ height: 50, width: 150 }} onValueChange={async(itemValue, itemIndex) => {this.setState({ eyes: itemValue });}}>
                  <Picker.Item label='Eyes 1' value='eyes1' />
                  <Picker.Item label='Eyes 2' value='eyes2' />
                  <Picker.Item label='Eyes 3' value='eyes3' />
                  <Picker.Item label='Eyes 4' value='eyes4' />
                  <Picker.Item label='Eyes 5' value='eyes5' />
                  <Picker.Item label='Eyes 6' value='eyes6' />
                  <Picker.Item label='Eyes 7' value='eyes7' />
                  <Picker.Item label='Eyes 8' value='eyes8' />
                  <Picker.Item label='Eyes 9' value='eyes9' />
                  <Picker.Item label='Eyes 10' value='eyes10' />
              </Picker>
              <Picker selectedValue={this.state.nose} style={{ height: 50, width: 150 }} onValueChange={async(itemValue, itemIndex) => {this.setState({ nose: itemValue });}}>
                  <Picker.Item label='Nose 1' value='nose2' />
                  <Picker.Item label='Nose 2' value='nose3' />
                  <Picker.Item label='Nose 3' value='nose4' />
                  <Picker.Item label='Nose 4' value='nose5' />
                  <Picker.Item label='Nose 5' value='nose6' />
                  <Picker.Item label='Nose 6' value='nose7' />
                  <Picker.Item label='Nose 7' value='nose8' />
                  <Picker.Item label='Nose 8' value='nose9' />
              </Picker>
              <Picker selectedValue={this.state.mouth} style={{ height: 50, width: 150 }} onValueChange={async(itemValue, itemIndex) => {this.setState({ mouth: itemValue });}}>
                  <Picker.Item label='Mouth 1' value='mouth2' />
                  <Picker.Item label='Mouth 2' value='mouth3' />
                  <Picker.Item label='Mouth 3' value='mouth5' />
                  <Picker.Item label='Mouth 4' value='mouth6' />
                  <Picker.Item label='Mouth 5' value='mouth7' />
                  <Picker.Item label='Mouth 6' value='mouth9' />
                  <Picker.Item label='Mouth 7' value='mouth10' />
                  <Picker.Item label='Mouth 8' value='mouth11' />
              </Picker>
              <View style={styles.sliderView}>
                  <Text style={{color: '#f00'}}>R</Text>
                  <Text>0</Text>
                  <Slider style={styles.slider1} minimumValue={0} maximumValue={15} step={1} onValueChange={async(itemValue, itemIndex) => {this.setState({r: itemValue});}}></Slider>
                  <Text>F</Text>
              </View>
              <View style={styles.sliderView}>
                  <Text style={{color: '#0f0'}}>G</Text>
                  <Text>0</Text>
                  <Slider style={styles.slider1} maximumValue={15} step={1} onValueChange={async(itemValue, itemIndex) => {this.setState({g: itemValue});}}></Slider>
                  <Text>F</Text>
              </View>
              <View style={styles.sliderView}>
                  <Text style={{color: '#00f'}}>B</Text>
                  <Text>0</Text>
                  <Slider style={styles.slider1} maximumValue={15} step={1} onValueChange={async(itemValue, itemIndex) => {this.setState({b: itemValue});}}></Slider>
                  <Text>F</Text>
              </View>

              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                  <Text>Update</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerText:{
    fontSize: 20,
    textAlign: "center",
    color: '#f01',
    padding: 10
  },

  header:{
    color: '#f00',
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#000'
  },

  personalInfo:{
    padding: 20,
    backgroundColor: '#095'
  },

  skills:{
    display: 'flex',
    padding: 20,
    backgroundColor: '#aaa'
  },

  submission:{
    padding: 20,
    backgroundColor:'#f01'

  },

  pic:{
    width: 310,
    height: 100
  },

  input:{

  },

  sliderView:{
    flexDirection: 'row',
    padding: 13
  },
  
  slider1:{
    flex: 1
  },

  slider2:{
    flex: 1

  },
  
  slider3:{
    flex: 1

  },

  picker:{
    height: 20,
    width: 100,
    color: '#ccc'
  },    

  button: {
    padding: 10,
    margin: 4,
    backgroundColor: '#aaa',
    borderRadius: 14
  }

});