import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Sobre( {route} ){
  const navigation = useNavigation();
   
  return(
    <View>
  


      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Nome: {route.params?.nome}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Idade: {route.params?.idade}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Data de Nascimento: {route.params?.data}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Sexualidade: {route.params?.sexos}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Escolaridade: {route.params?.escola}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Limite: R$ {route.params?.limite}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Estado Civil:  {route.params?.estado}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Brasileiro:  {route.params?.brasileiro ? 
      'Sim' : 'Não'}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> Estrangeiro:  {route.params?.estrangeiro ? 
      'Sim' : 'Não'}</Text>
     
      
    </View>
  )
}
