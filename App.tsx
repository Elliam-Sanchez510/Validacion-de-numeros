import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, PermissionsAndroid, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { string } from 'yup';

export default function App() {
  const [fecha, setFecha] = useState();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [concepto, setConcepto] = useState('');
  const [codigo, setCodigo] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  const saveDate = (text: string) => {
    if (text.length >= 10 && text !== '2022-07-29') {
      alert('error en la fecha')
      return
    }
    if (text.length >= 10) {
      setFecha(text)
      console.log(fecha);
    }
  }

  const saveJournal = () => {
    console.log(` \n La fecha es: ${fecha} \n\n`)
    console.log(`Nombre Completo: ${nombre}  ${apellido} \n\n`)
    console.log(`Descripción: ${concepto} \n\n`)
    console.log(`El codigop es: ${codigo} \n\n`)
    console.log(`El numero de cuenta es: ${cuenta} \n\n`)
  }

  const saveName = (text: string) => {
    setNombre(text)
  }
  const saveApellido = (text: string) => {
    setApellido(text)
  }
  const saveConcepto = (text: string) => {
    setConcepto(text)
  }
  const saveCodigo = (text: string) => {
    setCodigo(text)
  }
  const saveCuenta = (text: string) => {
    setCuenta(text)
  }
  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  }
  
  const saveDebit = (text: string) => {
    console.log(`La variable text con valor ${text} es un numero ?: ${isNumber(text)}`);
  }
  
  const saveCredit = (text: string) => {
    console.log(`La variable text con valor ${text} es un numero ?: ${isNumber(text)}`);

    setCredit(Number(text))
    console.log(credit);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Journals</Text>
      <Text style={styles.subtitulo}>Validación de Numeros</Text>
      <Text style={styles.negrita}>Fecha:</Text>
      <TextInput placeholder='Fecha' onChangeText={(text) => saveDate(text)}
        style={styles.TextInput}
      />

      <Text style={styles.negrita}>Nombre: </Text>
      <TextInput placeholder='Nombre' onChangeText={(text) => saveName(text)}
        style={styles.TextInput}
      />

      <Text style={styles.negrita}>Apellido: </Text>
      <TextInput placeholder='Apellido' onChangeText={(text) => saveApellido(text)}
        style={styles.TextInput} 
        />

      <Text style={styles.negrita}>Concepto: </Text>
      <TextInput placeholder='Concepto' onChangeText={(text) => saveConcepto(text)}
        style={styles.TextInput}
      />

      <Text style={styles.negrita}>Codigo: </Text>
      <TextInput placeholder='Codigo' onChangeText={(text) => saveCodigo(text)}
        style={styles.TextInput}
      />

      <Text style={styles.negrita}>Cuenta: </Text>
      <TextInput placeholder='Cuenta' onChangeText={(text) => saveCuenta(text)}
        style={styles.TextInput}
      />

      <Text style={styles.negrita}>Debito: </Text>
      <TextInput placeholder=' Debito' onChangeText={(text) => saveDebit(text)}
        style={styles.TextInput}
      />

      <Text style={styles.negrita}>Crédito: </Text>
      <TextInput placeholder='Crédito' onChangeText={(text) => saveCredit(text)}
        style={styles.TextInput}
      />
        <Button
          title='Guardar' onPress={() => alert('Guardado con éxito !')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#417dc1',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'black',
  },
  negrita: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 20,
    width: '35%',
    marginTop: 10,
    borderRadius: 15,
  }

});