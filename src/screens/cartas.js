import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/Theme'

const Cartas = () => {
  return (
    <View style={styles.container_cartas}>
      <TextInput 
      style={styles.cartas_input}
      placeholder='Matricula'
      />
      <TextInput 
      style={styles.cartas_input}
      placeholder='Nombre'
      />
      <TextInput 
      style={styles.cartas_input}
      placeholder='Dirección'
      />
      <TextInput 
      style={styles.cartas_input}
      placeholder='Telefono'
      />

      <TouchableOpacity style={styles.cartas_boton}>
        <Text style={styles.cartas_boton_text}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cartas
