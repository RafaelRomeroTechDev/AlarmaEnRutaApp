import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // <-- Importa useState
import { StyleSheet, View, Text, Button } from 'react-native'; // <-- Añade Text y Button
import WelcomeScreen from './src/components/WelcomeScreen.js';

export default function App() {
  // Definimos el estado del contador. 'count' es la variable de estado, 'setCount' es la función para actualizarla.
  // El 0 es el valor inicial.
  const [count, setCount] = useState(0);

  const appTitle = "Alarma en Ruta";
  const appSubtitle = "Tu compañero de viaje inteligente y confiable";

  return (
    <View style={styles.appContainer}>
      <WelcomeScreen
        title={appTitle}
        subtitle={appSubtitle}
        buttonText="Iniciar App"
      />

      {/* --- Nuevo código para el contador --- */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Contador: {count}</Text>
        <Button
          title="Incrementar"
          onPress={() => setCount(prevCount => prevCount + 1)} // Función para actualizar el estado
          color="#28a745" // Un color verde para el botón de incrementar
        />
      </View>
      {/* --------------------------------- */}

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center', // Centramos todo en App.js
    justifyContent: 'center', // Centramos todo en App.js
  },
  // Nuevos estilos para el contador
  counterContainer: {
    marginTop: 30, // Margen superior para separarlo de WelcomeScreen
    padding: 20,
    backgroundColor: '#e9ecef', // Un gris claro para el fondo del contador
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});
