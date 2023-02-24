import React, { useState } from 'react'
import { Text, TextInput, ToastAndroid, TouchableOpacity, View, VirtualizedList } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { styles, colores_cartas } from '../theme/Theme'

const initialState = {
  matricula: '',
  nombre: '',
  direccion: '',
  telefono: ''
}
const initialStateBotones = {
  agregar: true,
  campoMatricula: true
}

function getItem(data, index){
  return{
  matricula: data[index].matricula,
  nombre: data[index].nombre,
  direccion: data[index].direccion,
  telefono: data[index].telefono}
}

function Item({dat}){
  return(
  <View style={styles.virtualizedlist}>
    <View style={styles.virtualizedlist_group}>
      <Text style={styles.virtualizedlist_title}>Matricula:</Text> 
      <Text style={styles.virtualizedlist_value}>{dat.item.matricula }</Text>
    </View>
    <View style={styles.virtualizedlist_group}>
      <Text style={styles.virtualizedlist_title}>Nombre:</Text> 
      <Text style={styles.virtualizedlist_value}>{dat.item.nombre }</Text>
    </View>
    <View style={styles.virtualizedlist_group}>
      <Text style={styles.virtualizedlist_title}>Dirección:</Text> 
      <Text style={styles.virtualizedlist_value}>{dat.item.direccion }</Text>
    </View>
    <View style={styles.virtualizedlist_group}>
      <Text style={styles.virtualizedlist_title}>Telefono:</Text> 
      <Text style={styles.virtualizedlist_value}>{dat.item.telefono }</Text>
    </View>
  </View>
)}

function getItemCount(data){
  return data.length
}


const Cartas = () => {

  const [datos, setDatos] = useState([])
  const [alumno, setAlumno] = useState(initialState)
  const [botones, setBotones] = useState(initialStateBotones)

  let mat = ''
  

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
  }
  function handleLimpiar(){
    setAlumno(initialState)
    setBotones({...botones, campoMatricula: true}) 
  }
  function handleBuscar(){
    for(const d of datos){
      if(alumno.matricula === d.matricula) {
        setAlumno(d)
        mat = alumno.matricula
        setBotones({...botones, campoMatricula: false})
        return 
      }else{
        ToastAndroid.show('No se encontró la matricula', ToastAndroid.SHORT)
      }
    }
  }
  function handleEliminar(){
    const arr = [...datos]
    arr.forEach((a, index) => {
      if(a.matricula===alumno.matricula){
        arr.splice(index, 1)
        setDatos(arr)
        ToastAndroid.show('Registro eliminado', ToastAndroid.SHORT)
        handleLimpiar()
      }else{
        ToastAndroid.show('El registro no existe', ToastAndroid.SHORT)
      }
    })
  }
  function handleModificar(){
    const arr = [...datos]
    for(const a of arr){
      if(a.matricula === alumno.matricula){
        a.nombre = alumno.nombre
        a.direccion = alumno.direccion
        a.telefono = alumno.telefono

        setDatos(arr)
        handleLimpiar()
        ToastAndroid.show('registro modificado', ToastAndroid.SHORT)
      }
    }
  }

  const {matricula, nombre, direccion, telefono} = alumno


  return (


    <View style={styles.container_cartas}>
      <TextInput 
      style={styles.cartas_input}
      placeholder='Matricula'
      value={matricula}
      onChangeText={valor => handleChange('matricula', valor)}
      editable={botones.campoMatricula}
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

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.cartas_boton} onPress={handleSubmit}>
          <Text style={styles.cartas_boton_text}>Agregar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.cartas_boton, backgroundColor: colores_cartas.alerta}} onPress={handleLimpiar}>
          <Text style={styles.cartas_boton_text}>Limpiar</Text>
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={{...styles.cartas_boton, backgroundColor: 'lightblue'}} onPress={handleBuscar}>
          <Text style={styles.cartas_boton_text}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.cartas_boton, backgroundColor: 'red'}} onPress={handleEliminar}>
          <Text style={styles.cartas_boton_text}>Eliminar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{...styles.cartas_boton, backgroundColor: '#ffd14f'}} onPress={handleModificar}>
          <Text style={styles.cartas_boton_text}>Modificar</Text>
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
