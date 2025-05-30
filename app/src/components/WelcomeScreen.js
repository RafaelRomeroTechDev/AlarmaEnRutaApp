import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Definimos el componente funcional WelcomeScreen. Ahora recibe 'props' como argumento.
const WelcomeScreen = (props) => { // <-- Aquí capturamos las props
  return (
    <View style={styles.container}>
      {/* Usamos props.title, props.subtitle y props.buttonText */}
      <Text style={styles.title}>¡Bienvenido a {props.title}!</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <Button
        title={props.buttonText} // <-- Usamos props.buttonText
        onPress={() => alert(`¡Botón "${props.buttonText}" presionado!`)}
        color="#FFA07A"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Un azul muy claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
