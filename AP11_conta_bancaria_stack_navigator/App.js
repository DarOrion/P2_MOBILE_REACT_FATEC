import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, TextInput, Switch, Image } from 'react-native';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
 

const Stack = createStackNavigator();






export default function App(){


  
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home}
            
        options={{
      
           
          
          title:'ABERTURA DE CONTA BANCARIA'  ,
          

          
          headerStyle:{   backgroundColor: 'black' , textAlign: 'center',    },
          headerTintColor: 'white',}}
        />
        
        <Stack.Screen
        name="Dados informados da conta"
         component={Sobre}
        options={{
          title:'Dados informados da conta',
          headerStyle:{     backgroundColor: 'blue' },
          headerTintColor: 'white',
          
       
        }}
        />
 



 
      </Stack.Navigator>
    </NavigationContainer>
  )
}