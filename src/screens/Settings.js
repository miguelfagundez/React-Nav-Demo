import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Setting({navigation}){
    return (
        <View style={settingStyles.container}>
            <View style = {settingStyles.content}>
                <Text>SETTING SCREEN</Text>
                <Button 
                style = {settingStyles.settingText} 
                title='Go back'
                onPress = {()=> navigation.goBack()} />
            </View>
        </View>
    );
}

const settingStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        backgroundColor: '#c203fc',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    settingText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    }
    
});
