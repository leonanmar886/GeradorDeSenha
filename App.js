import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

let base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function App() {
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(7);

  function gerarSenha(){
    let pass = '';
    for(let i = 0, n = base.length; i < value; i++){
      pass += base.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass)

  }

  function deletSenha(){
    setPassword('')
  }

  return (
    <View style={styles.container}>

      <Image
        style={ styles.logo }
        source={ require('./src/assets/logo.png') }
      />

      <Text style={ styles.title }> {value} Caracteres </Text>

      <View style={ styles.area }>

        <Slider
          style={{ height: 50 }}
          minimumValue={ 5 }
          maximumValue={ 10 }
          thumbTintColor={'white'}
          maximumTrackTintColor={ 'black' }
          minimumTrackTintColor={ '#66b3ff' }
          value={ value }
          onValueChange={ (valor) => setValue(valor.toFixed(0)) }
        />

      </View>

      <TouchableOpacity style={ styles.buttom } onPress={gerarSenha}>

        <Text style={ styles.textButtom }> Gerar nova senha </Text>

      </TouchableOpacity>

      {password !== '' && (
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity style={ styles.buttomDel } onPress={deletSenha}>

            <Text style={ styles.textDel }> Apagar campo </Text>

          </TouchableOpacity>

          <View style={ styles.passArea }>

            <Text style={ styles.pass }> {password} </Text>
  
          </View>

        </View>

      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0059b3',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 250,
    height: 250,
    marginTop: -5
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 75,
    color: 'white'
  },

  area: {
    width: '80%',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#0073e6',
    borderRadius: 8
  },

  buttom: {
    width: '80%',
    height: 50,
    backgroundColor: '#0073e6', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButtom: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },

  passArea:{
    width: '80%',
    height: 50,
    marginTop: 35,
    backgroundColor: '#1E90FF',
    borderRadius: 8
  },

  pass: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },

  buttomDel: {
    marginTop: 10,
    width: '50%',
    height: 50,
    backgroundColor: '#0073e6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textDel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
