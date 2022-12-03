import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';

let img = 'https://siga.cps.sp.gov.br/image//N4Y9ZJZ38Y8E4S5TESCDT3SWJIEV9U.TMB.JPG';



function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style ={{ color: 'black' , fontWeight: 'bold' , fontSize: 30, margin: 1, borderWidth: 3, borderColor: 'red' ,}}>Perfil</Text>
      <Button
        



        
        title="Clique aqui para Abrir o Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      
    </View>
  );
}

function Pessoal() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Text style ={{ fontSize: 20, margin: 1}}>
        Nasci em Cruzeiro - São Paulo, no dia 17 de Agosto de 1988, Porém vim para Praia Grande com 40 dias de vida. Morei um tempo em São Paulo e Fortaleza.
      </Text>
    </View>
  );
}

function Formacao() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
     <Text style ={{ fontSize: 20, margin: 1}}>
       Estudei na escola Abrahão Jacob Lafer (escola estudual, na Praia Grande) até 8° ano. Depois fiz a prova do Objetivo e ganhei 45% de bolsa e terminei o ensino médio lá. Depois fiz cursos técnicos de Administração de Empresa; Ténico de Logística e Logística de Planejamento Portuário; Técnico e Manutenção de Computadores
      </Text>
    </View>
  );
}

function Experiencia() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
        <Text style ={{ fontSize: 20, margin: 1}}></Text>
        Não tenho experiencia com nenhuma linguagem e na area de desenvolvimento. Minha experiência é na area Administrativa, Portuária e Hardware. Estou estudando ADS - Análise e Desenvolvimento de Sistema na FATEC - Praia Grande
    </View>

  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
     <Image
          source={{ uri: img }}
          style={{  width: 200, height: 200, borderRadius: 200 / 2}}
        />
        <view> Marcelo Felicio Pereira </view>
      <DrawerItemList {...props} />      
     
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    

    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props}  />}
    >
      <Drawer.Screen name="Olá, Bem Vindo" component={Feed} />
      <Drawer.Screen name="Informações Pessoais" component={Pessoal} />
      <Drawer.Screen name="Minha Formação" component={Formacao} />
      <Drawer.Screen name="Minha Experiência" component={Experiencia} />
    </Drawer.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
    
      <MyDrawer />
    </NavigationContainer>
  );
}