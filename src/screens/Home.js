import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home(){
    return (
        <View sty>
            <View>
                <Text>HOME SCREEN</Text>
            </View>
        </View>
    );
}

const homeStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        backgroundColor: '#03cafc',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    homeText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
    
});
