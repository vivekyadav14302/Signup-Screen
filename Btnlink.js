import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginSignUpBtn({
    customStyle,
    text,
    btnText,
    onPress,
}) {
    return (
        <View style={[styles.container, customStyle]}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.btnText}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 16,
        lineHeight: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        padding: -20,
    },

    text: {
        fontSize: 18,
        lineHeight: 20,
        color: 'white'
    },

    btnText: {
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 20,
        color: 'yellow',
        marginLeft: 10,
        letterSpacing: 0.4,
    },
});