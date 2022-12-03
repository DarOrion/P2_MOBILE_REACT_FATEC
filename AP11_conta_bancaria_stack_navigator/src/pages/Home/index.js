import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';





export default function Home() {
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [idade, setIdade] = useState();
  const [data, setData] = useState();
  const [civil, setCivil] = useState();
  const [sexo, setSexo] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState();
  const [nacionalidade, setNacionalidade] = useState();
  const [nacionalid, setNacionalid] = useState();
  

  function irSobre() {
    navigation.navigate('Dados informados da conta', {
      nome: name,
      idade: idade,
      data: data,
      estado: civil,
      sexos: sexo,
      escola: escolaridade,
      limite: limite,
      brasileiro: nacionalidade,
      estrangeiro: nacionalid,

    });
  }

  return (
    <View>
      <TextInput style={{color: 'black', fontSize: 15, borderWidth: 3, textAlign: 'center', }}
        placeholder="Por favor, digite seu nome completo?"
        onChangeText={(valor) => setName(valor)}
      />
      <br/>
      <TextInput style={{color: 'black', fontSize: 15, borderWidth: 3, textAlign: 'center', }}
        placeholder="Por favor, digite sua idade? "
        onChangeText={(valor) => setIdade(valor)}
      />
      <br/>
      <TextInput style={{color: 'black', fontSize: 13, borderWidth: 3, textAlign: 'center', }}
        placeholder="Por favor, digite sua data de nascimento? (Dia/Mês/Ano) "

        onChangeText={(valor) => setData(valor)}
      />
      <br/>
       <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Estado Civil:</Text>
      <Picker
        selectedValue={civil}
        onValueChange={(itemValor, itemIndex) => setCivil(itemValor)}>
        <Picker.Item label="" valor="" />
        <Picker.Item label="Solteiro(a)" valor="Solteiro(a)" />
        <Picker.Item label="Casado(a)" valor="Casado(a)" />
        <Picker.Item label="Divorciado(a)" valor="Divorciado(a)" />
        <Picker.Item label="Seperado(a)" valor="Separado(a)" />
        <Picker.Item label="Viúvo(a)" valor="Viúvo(a)" />
      </Picker> 


      <Text  style={{color: 'black', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValor, itemIndex) => setSexo(itemValor)}>
        <Picker.Item label="" valor="" />
        <Picker.Item label="Masculino" valor="Masculino" />
        <Picker.Item label="Feminino" valor="Feminino" />
      </Picker>

      <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Escolaridade: </Text>
      <Picker
        selectedValue={escolaridade}
        onValueChange={(itemValor, itemIndex) => setEscolaridade(itemValor)}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Superior Cursando" value="Superior Cursando" />
        <Picker.Item label="Superior Incompleto" value="Supeior Incompleto" />
        <Picker.Item label="Superior Completo" value="Superior Completo" />
      </Picker>
      <Text>
        <Slider
          
          onValueChange={(valor) => setLimite(valor)}
          size="5"
          style={{ width: 300, height: 40 }}
          minimumValue={100}
          maximumValue={10000}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        
        />{' '}
         <br/>
       <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}>R${(limite)} </Text>
      </Text>


     
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Brasileiro? </Text>

      <Switch
        value={nacionalidade}
        onValueChange={(valor) => setNacionalidade(valor)}
      />
      <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold' }}>{nacionalidade ? 'Sim' : 'Não'}</Text>
     
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}>Estrangeiro? </Text>
      <Switch
        value={nacionalid}
        onValueChange={(valor) => setNacionalid(valor)}
      />
      <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold', }}>{nacionalid ? 'Sim ' : 'Não'}</Text>
          

      <Button title="Criar sua conta" onPress={irSobre} />
    </View>
  );
}
