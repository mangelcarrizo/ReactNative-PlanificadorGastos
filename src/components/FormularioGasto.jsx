import React, { useState, useEffect } from 'react'
import {
     Text,
     View,
     StyleSheet,
     TextInput,
     Pressable
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from './styles'

export default function FormularioGasto({ setModal }) {

     const [nombre, setNombre] = useState('')
     const [cantidad, setCantidad] = useState('')
     const [categoria, setCategoria] = useState('')

     return (
          <View style={styles.contenedor}>
               <View>
                    <Pressable
                         style={styles.btnCancelar}
                         onPress={() => setModal(false)}
                    >
                         <Text
                              style={styles.btnCancelarTexto}
                         >
                              Cancelar
                         </Text>
                    </Pressable>
               </View>

               <View
                    style={styles.formulario}
               >
                    <Text
                         style={styles.titulo}
                    >
                         Nuevo Gasto
                    </Text>

                    <View
                         style={styles.campo}
                    >
                         <Text
                              style={styles.label}
                         >
                              Nombre Gasto
                         </Text>
                         <TextInput
                              placeholderTextColor={'#808080'}
                              style={styles.input}
                              placeholder='Nombre del Gasto'
                              value={nombre}
                              onChangeText={setNombre}
                         />
                    </View>

                    <View
                         style={styles.campo}
                    >
                         <Text
                              style={styles.label}
                         >
                              Cantidad Gasto
                         </Text>
                         <TextInput
                              placeholderTextColor={'#808080'}
                              style={styles.input}
                              placeholder='Cantidad de Gasto'
                              keyboardType='numeric'
                              value={cantidad}
                              onChangeText={setCantidad}
                         />
                    </View>

                    <View
                         style={styles.campo}
                    >
                         <Text
                              style={styles.label}
                         >
                              Categoría
                         </Text>
                         <Picker
                              style={styles.input}
                              mode='dropdown'
                              selectedValue={categoria}
                              onValueChange={(itemValue) => {
                                   setCategoria(itemValue)
                              }}
                         >
                              <Picker.Item
                                   label='Seleccionar'
                                   value=''
                              />
                              <Picker.Item
                                   label='Comida'
                                   value='comida'
                              />
                              <Picker.Item
                                   label='Ropa'
                                   value='ropa'
                              />
                              <Picker.Item
                                   label='Salidas'
                                   value='salidas'
                              />
                              <Picker.Item
                                   label='Viajes'
                                   value='viajes'
                              />
                              <Picker.Item
                                   label='Suscripciones'
                                   value='suscripciones'
                              />
                              <Picker.Item
                                   label='Otros'
                                   value='otros'
                              />
                         </Picker>
                    </View>

                    <Pressable
                         style={styles.submitBtn}
                    >
                         <Text
                              style={styles.submitBtnTexto}
                         >
                              Agregar Gasto
                         </Text>
                    </Pressable>

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     contenedor: {
          backgroundColor: '#1E40AF',
          flex: 1,
     },
     btnCancelar: {
          backgroundColor: '#DB2777',
          padding: 10,
          marginTop: 50,
          marginHorizontal: 50,
          borderRadius: 15,
     },
     btnCancelarTexto: {
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: 20,
          color: '#FFF',
          fontWeight: 'bold'
     },
     formulario: {
          ...globalStyles.contenedor
     },
     titulo: {
          textAlign: 'center',
          fontSize: 35,
          marginBottom: 10,
          color: '#64748B'
     },
     campo: {
          marginVertical: 10,
     },
     label: {
          color: '#64748B',
          textTransform: 'uppercase',
          fontSize: 18,
          fontWeight: 'bold'
     },
     input: {
          backgroundColor: '#f5f5f5',
          borderRadius: 15,
          padding: 5,
          color: '#64748B',
          marginTop: 10,
     },
     submitBtn: {
          backgroundColor: '#3B82F6',
          padding: 10,
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 20
     },
     submitBtnTexto: {
          textAlign: 'center',
          color: '#FFF',
          fontWeight: 'bold',
          textTransform: 'uppercase'
     }
})
