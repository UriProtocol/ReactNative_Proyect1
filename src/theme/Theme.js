// import React from "react"
import { StyleSheet } from "react-native"

export const colores_cartas = {
  fondo: '#bbbbbb',
  secundario: '#666666',
  primario: '#1a1a1a',
  alerta: '#f9de5a',
  terciario: '#ea3481'
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      padding: 0,
    },
    uno:{
      flex: 1,
      backgroundColor: 'black',
      padding: 30,
      justifyContent: 'center'
    },
    texto1: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginBottom: 20
    },
    textoBoton: {
      color: 'black',
      textAlign: 'center',
      fontSize: 25
    },
    boton1:{
      padding: 15,
      backgroundColor: 'white',
      marginBottom: 15,
      marginTop: 15,
    },
    container_cartas:{
      flex: 1,
      backgroundColor: colores_cartas.fondo,
      padding: 20
    },
    cartas_input:{
      padding: 15,
      margin: 12,
      borderWidth: 2,
      borderColor: colores_cartas.primario,
      backgroundColor: '#fff',
      borderRadius: 5
    },
    cartas_boton: {
      backgroundColor: colores_cartas.terciario,
      padding: 15,
      margin: 10,
      width: '45%'
    },
    cartas_boton_text:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    virtualizedlist:{
      backgroundColor: '#fff',
      padding: 20,
      paddingStart: 30,
      paddingEnd: 30,
      margin: 10,
      borderWidth: 2,
      borderColor: colores_cartas.primario,
      Height: 50
    },
    virtualizedlist_title:{
      color: colores_cartas.terciario,
      fontWeight: '600',
      fontSize: 20,
      marginStart: 15
    },
    virtualizedlist_group:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    virtualizedlist_value:{
      color: colores_cartas.primario,
      fontSize: 15,
      fontWeight: '500',
      marginEnd: 18,
      marginStart: 20,
      flex: 1,
      flexWrap: 'wrap',
      textAlign: 'right'
    }

  })

