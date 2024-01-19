
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text1} >¡Hola, Coder!</Text>
      <Text style= {styles.text2} >Soy Magaly y esta es mi primera app...</Text>
      <Text style= {styles.text3} >¿Qué sigue?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efd9d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  text2: {
    color: 'lightblue',
    fontStyle: 'italic',
  },
  text3:{
    color: 'white',
    fontSize: 25,
  },
});
