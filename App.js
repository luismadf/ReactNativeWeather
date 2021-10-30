import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [bg, setBg] = useState('rgb(71,149,212)');
  const {ciudad, pais} = busqueda;
  const APIKey = 'fe7e83fea4e954774203b64f4ab3a791';

  const bgApp = {
    backgroundColor: bg,
  };

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKey}`;
        try {
          const data = await fetch(url);
          const resultado = await data.json();
          setResultado(resultado);

          const kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;

          if (actual < 10) {
            setBg('rgb(105,108,149)');
          } else if (actual >= 10 && actual < 25) {
            setBg('rgb(71,149,212)');
          } else {
            setBg('rgb(178,28,61)');
          }
        } catch (error) {
          showAlert();
        }
        setConsultar(false);
        return;
      }
    };

    consultarClima();
  }, [consultar]);

  const showAlert = () => {
    Alert.alert('Error', 'No hay resultado, intenta con otra ciudad o país', [
      {text: 'Ok'},
    ]);
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={[styles.app, bgApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
