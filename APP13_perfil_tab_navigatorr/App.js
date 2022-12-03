import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
 
const Tab = createBottomTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer >
      <Tab.Navigator >
        <Tab.Screen name='Pessoal' component={Home}   
        options={{   tabBarLabel: 'Pessoal',  tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'blue'} size={30} />
          ),
        }}
      />
        <Tab.Screen name='Formação' component={Sobre} options={{   tabBarLabel: 'Formação',  
        tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="school" color={'blue'} size={30} />
          ),
        }}
      />

        <Tab.Screen name='Experiência' component={Contato} options={{   tabBarLabel: 'Experiência',  
        tabBarIcon: ({ color, size }) => (<MaterialIcons name="work" color={'blue'} size={30} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
