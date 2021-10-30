import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = () => {
  const [animate] = useState(new Animated.Value(1));

  const animacionEntrada = () => {
    console.log('Entrada...');
  };

  const animacionSalida = () => {
    console.log('Salida...');
  };

  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput style={styles.input} placeholder="Ciudad" />
        </View>
        <View>
          <Picker
            itemStyle={{height: 120, backgroundColor: '#fff', borderRadius: 8}}>
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}>
          <View style={styles.btnBuscar}>
            <Text style={styles.textBuscar}>Buscar Clima</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 8,
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
