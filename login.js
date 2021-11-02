import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Image} from 'react-native';
import NewButton from './newBtn';
import LoginSignUpBtn from './btnlink';
import ORDivider from './OR';

function Login() {
    return (
        <ImageBackground style={{flex: 1}} source={require('./assets/images/background.png')}>
        <ScrollView style={styles.container}>
          <View>
          
          <Image style={{width: 100, height: 170, position: 'absolute', top: 130, left: 200}} source={require('./assets/images/main.png')}></Image>
          
            <Text style={styles.text}>Welcome Back !</Text>
            <TextInput style={styles.inputStyle} keyboardType="email-address" placeholder="Email Id" placeholderTextColor='white'></TextInput>
            <TextInput style={styles.inputStyle2} secureTextEntry placeholder="Password" placeholderTextColor='white'></TextInput>
        
            <NewButton title="Login"></NewButton>
            <ORDivider></ORDivider>
            <LoginSignUpBtn text="Don't have an account ?" btnText="Signup"></LoginSignUpBtn>
        </View>
        </ScrollView>
        </ImageBackground>
      );
}

const styles = StyleSheet.create({
    container: {
        height: 100,

    },
    text: {
        color: 'white',
        marginTop: 200,
        marginLeft:35,
        fontSize: 28,
    },
    inputStyle: {
        backgroundColor: 'grey',
        borderRadius: 6,
        width: 330,
        height: 45,
        fontSize: 16,
        marginLeft: 80,
        marginTop: 75,
        padding: 10,
        shadowColor: 'white',
        shadowRadius: 20,
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 1,
    },
    inputStyle2: {
        backgroundColor: 'grey',
        borderRadius: 6,
        width: 330,
        height: 45,
        fontSize: 16,
        marginLeft: 80,
        marginTop: 30,
        padding: 10,
        shadowColor: 'white',
        shadowRadius: 20,
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 1,
    },
    
})
export default Login
