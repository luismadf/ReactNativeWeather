import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Clima = ({resultado}) => {
  const {name, main} = resultado;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <>
      <View style={styles.clima}>
        <Text style={[styles.texto, styles.actual]}>
          {parseInt(main.temp - kelvin)}
          <Text style={styles.temp}>&#x2103;</Text>
          <Image
            style={{width: 66, height: 58}}
            source={{
              uri: `https://openweathermap.org/img/w/${resultado.weather[0].icon}.png`,
            }}
          />
        </Text>
        <View style={styles.temperaturas}>
          <Text style={styles.texto}>
            Min:{' '}
            <Text style={styles.temp}>
              {parseInt(main.temp_min - kelvin)} &#x2103;
            </Text>
          </Text>
          <Text style={styles.texto}>
            Max:{' '}
            <Text style={styles.temp}>
              {parseInt(main.temp_max - kelvin)} &#x2103;
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 10,
  },
  actual: {
    fontSize: 80,
    marginRight: 10,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperaturas: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Clima;
