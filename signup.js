import React from 'react'
import { StyleSheet, ScrollView, Text, ImageBackground, TextInput, Image } from 'react-native'
import NewButton from './newBtn';
import LoginSignUpBtn from './btnlink';
import ORDivider from './OR'
import {Picker} from '@react-native-picker/picker';

function Signup() {
    return (
        <ImageBackground style={{flex: 1}} source={require('./assets/images/bg2.jpg')}>
        <ScrollView style={newstyle.container}>
        <Image style={{width: 60, height: 80, position: 'absolute', top: 25, left: 340}} source={require('./assets/images/balloon-02.png')}></Image>
        <Image style={{width: 70, height: 70, position: 'absolute', top: 30, left: 100}} source={require('./assets/images/balloon.png')}></Image>
        <Text style={newstyle.maintext}>Create an Account</Text>
        <Image style={{width: 40, height: 50, position: 'absolute', top: 195, left: 30}} source={require('./assets/images/01.png')}></Image>

        <TextInput style={newstyle.inputStyle} keyboardType="" placeholder="Name" placeholderTextColor='red'></TextInput>
        <Image style={{width: 30, height: 50, position: 'absolute', top: 283, left: 35}} source={require('./assets/images/02.png')}></Image>
        <TextInput style={newstyle.inputStyle2} keyboardType="phone-pad" placeholder="Mobile" placeholderTextColor='red'></TextInput>
        <Image style={{width: 30, height: 50, position: 'absolute', top: 372, left: 35}} source={require('./assets/images/03.png')}></Image>
        <Picker style={newstyle.inputStyle2}>
            <Picker.Item value="Gender" label="Gender"></Picker.Item>
            <Picker.Item value="Male" label="Male"></Picker.Item>
            <Picker.Item value="Female" label="Female"></Picker.Item>
        </Picker>
        <Image style={{width: 30, height: 50, position: 'absolute', top: 458, left: 35}} source={require('./assets/images/04.png')}></Image>
        <TextInput style={newstyle.inputStyle2} keyboardType="email-address" placeholder="Email Id" placeholderTextColor='red'></TextInput>
        <Image style={{width: 30, height: 50, position: 'absolute', top: 543, left: 35}} source={require('./assets/images/05.png')}></Image>
        <TextInput style={newstyle.inputStyle2} secureTextEntry placeholder="Passsword" placeholderTextColor='red'></TextInput>
        <Image style={{width: 30, height: 50, position: 'absolute', top: 631, left: 35}} source={require('./assets/images/06.png')}></Image>
        <TextInput style={newstyle.inputStyle2} secureTextEntry placeholder="Confirm Password" placeholderTextColor='red'></TextInput>
        <NewButton title="Register"></NewButton>
        <ORDivider></ORDivider>
            <LoginSignUpBtn text="Already have an account ?" btnText="Login"></LoginSignUpBtn>
        </ScrollView>
        </ImageBackground>
    )
}
const newstyle = StyleSheet.create({
    container: {
        height: 100,
    },
    maintext: {
        color: 'white',
        fontSize: 30,
        marginTop: 100,
        textAlign: 'center',
        letterSpacing: 0.8,
        shadowColor: 'yellow',
        shadowRadius: 25,
        shadowOffset: {width: 0, height: 8},
        textTransform: 'capitalize'
},
inputStyle: {
    backgroundColor: 'skyblue',
    borderRadius: 6,
    width: 330,
    height: 45,
    fontSize: 16,
    marginLeft: 80,
    marginTop: 60,
    padding: 10,
    shadowColor: 'yellow',
    shadowRadius: 30,
    shadowOffset: {width: 1, height:3},
    shadowOpacity: 1,
},
inputStyle2: {
    backgroundColor: 'skyblue',
    borderRadius: 6,
    width: 330,
    height: 45,
    fontSize: 16,
    marginLeft: 80,
    marginTop: 42,
    padding: 10,
    color: 'red',
    shadowColor: 'white',
    shadowRadius: 35,
    shadowOffset: {width: 2, height:3},
    shadowOpacity: 1,
},

})
export default Signup
