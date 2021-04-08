import React from 'react';
import {View, Text, Button, Image, TouchableHighlight} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

/* PANTALLA DE INICIO */
const HomeScreen = () => {
  const navigation = useNavigation();

  /* DATOS DE JSON QUE SE ENVIARA A OTRA PANTALLA */
  const data = {
    nombre: 'User Name',
    imagen:
      'https://thumbs.dreamstime.com/z/businessman-avatar-line-icon-vector-illustration-design-79327237.jpg',
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom: 20}}>Home Screen</Text>

      {/* BOTON PARA IR A PANTALLA DOS Y A LA VEZ ENVIAR PARAMETROS CON NAVIGATION */}
      <Button
        title=" User Profile "
        onPress={() => navigation.navigate('User_Profile', data)}
      />

    <TouchableHighlight
      style={{
          marginRight:40,
          marginLeft:40,
          marginTop:10,
          paddingTop:20,
          paddingBottom:20,
          backgroundColor:'#68a0cf',
          borderRadius:10,
          borderWidth: 1,
          borderColor: '#fff'
        }
      }
      onPress={() => {}}
      underlayColor='#fff'>
        <Text style={[2,{color:'#fff',textAlign:'center',}]}>       Submit      </Text>
    </TouchableHighlight>
    </View>
  );
};

const AnotherScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text  style={{marginBottom: 20}}>Another Screen</Text>

      {/* BOTON PARA IR A PANTALLA DE INICIO */}
      <Button title=" Home Screen " onPress={() => navigation.popToTop()} />
    </View>
  );
};

const ProfileScreen = ({route: {params}}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* NOMBRE DE PARAMETRO ENVIADO */}
      <Text style={{marginBottom: 10}}>{params.nombre}</Text>

      {/* IMAGEN DE PARAMETRO ENVIADO */}
      <Image
        source={{uri: `${params.imagen}`}}
        style={{width: 100, height: 100}}
      />

      {/* BOTON PARA NAVEGAR A PANTALLA 1 */}
      <Button
        title="Another Screen"
        onPress={() => navigation.navigate('Another_Screen')}
      />
    </View>
  );
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* STACK DE NAVEGACION */}
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {/* PANTALLA DE INICIO */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: true,
          }}
        />

        {/* PANTALLA 1 */}
        <Stack.Screen
          name="Another_Screen"
          component={AnotherScreen}
          options={{
            title: ' Another Screen ',
            headerShown: true,
          }}
        />

        {/* PANTALLA 2 */}
        <Stack.Screen
          name="User_Profile"
          component={ProfileScreen}
          options={{
            title: 'User Profile',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;