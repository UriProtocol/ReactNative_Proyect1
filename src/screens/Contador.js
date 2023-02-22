import React, { useState } from 'react';
import  { View, Text, TouchableOpacity} from 'react-native'
import { styles } from '../theme/Theme';

function Contador() {

  const [dato, setDato] = useState(0)

  const incrementarDato = () =>{
    setDato(d => d+1)
  }
  const decrementarDato = () =>{
    setDato(d => d-1)
  }
  const reiniciarDato = () =>{
    setDato(0)
  }


  return (
    <View style={styles.container}>
      <View style={styles.uno}>
        <Text style={styles.texto1}>Contador: {dato}</Text>
        <TouchableOpacity style={styles.boton1} onPress={incrementarDato}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton1} onPress={decrementarDato}>
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton1} onPress={reiniciarDato}>
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default Contador