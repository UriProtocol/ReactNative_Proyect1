import React, { useState } from 'react'
import { Text, TextInput, ToastAndroid, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { styles } from '../theme/Theme'

const initialState = {
  matricula: '',
  nombre: '',
  direccion: '',
  telefono: ''
}
const initialStateBotones = {
  agregar: true
}

function getItem(data, index){
  return{
  matricula: data[index].matricula,
  nombre: data[index].nombre,
  direccion: data[index].direccion,
  telefono: data[index].telefono}
}

function Item({dat}){
  console.log(dat)
  return(
  <View>
    <Text>Matricula: {dat.item.matricula }</Text>
    <Text>Nombre: {dat.item.nombre}</Text>
    <Text>Direccion: {dat.item.direccion}</Text>
    <Text>Telefono: {dat.item.telefono}</Text>
  </View>
)}

function getItemCount(data){
  return data.length
}


const Cartas = () => {

  const [datos, setDatos] = useState([])
  const [alumno, setAlumno] = useState(initialState)
  const [botones, setBotones] = useState(initialStateBotones)
  

  function handleChange(nombre, valor){
    setAlumno({...alumno, [nombre]: valor})
  }
  function handleSubmit(){

    if(alumno.matricula != ''){
      let dat = [...datos]
      dat.push(alumno)
      setDatos(dat)
      setAlumno(initialState)
      ToastAndroid.show('alumno agregado', ToastAndroid.SHORT)
    }else{
      ToastAndroid.show('Ingresa datos', ToastAndroid.SHORT)

    }

    // setDatos(...datos, alumno)
  }

  const {matricula, nombre, direccion, telefono} = alumno


  return (


    <View style={styles.container_cartas}>
      <TextInput 
      style={styles.cartas_input}
      placeholder='Matricula'
      value={matricula}
      onChangeText={valor => handleChange('matricula', valor)}
      />
      <TextInput 
      style={styles.cartas_input}
      placeholder='Nombre'
      value={nombre}
      onChangeText={valor => handleChange('nombre', valor)}
      
      />
      <TextInput 
      style={styles.cartas_input}
      placeholder='Dirección'
      value={direccion}
      onChangeText={valor => handleChange('direccion', valor)}

      />
      <TextInput 
      style={styles.cartas_input}
      placeholder='Telefono'
      value={telefono}
      onChangeText={valor => handleChange('telefono', valor)}
      />

      <TouchableOpacity style={styles.cartas_boton} onPress={handleSubmit}>
        <Text style={styles.cartas_boton_text}>Agregar</Text>
      </TouchableOpacity>
      <VirtualizedList 
        data={datos}
        getItem={getItem}
        getItemCount={getItemCount}
        renderItem={item => <Item dat={item}/>}
        keyExtractor={item => item.matricula}
      />
    </View>
  )
}

export default Cartas
