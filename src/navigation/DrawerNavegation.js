import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
    createDrawerNavigation,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-nativation/drawer';

import Home from '../screens/Home';
import Setting from '../screens/Settings';

function CustomDrawerFunction(props){
    return (
        <ScrollView style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
                <View>
                    <Text style = {styles.drawerHeaderText}>Drawer Demo</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                <DrawerItem
                label="Close drawer"
                onPress={()=>props.navigation.closeDrawer()}/>
            </DrawerContentScrollView>
        </ScrollView>
    );
}

const DrawerNavegation = () => {
    return (
        <NavigationContainer>
            <MyCustomDrawer />
        </NavigationContainer>
        
    )
}

const Drawer = createDrawerNavigation();

function MyCustomDrawer(){
    return (
        <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomDrawerFunction{...props} />}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Setting" component={Setting}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContainer:{
        flex: 1,
    },
    drawerHeader:{
        height: 150,
        backgroundColor: '#03cafc',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
    
});

export default DrawerNavegation;
