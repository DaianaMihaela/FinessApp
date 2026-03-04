import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function StepCounterScreen() {
  const [steps, setSteps] = useState(0);

  const addSteps = () => setSteps(prev => prev + 100);
  const resetSteps = () => setSteps(0);

  return (
    <ImageBackground
      source={require('../assets/images/step-counter-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Contor Pași</Text>
        <Text style={styles.stepCount}>{steps}</Text>

        <TouchableOpacity style={styles.button} onPress={addSteps}>
          <Text style={styles.buttonText}>+ 100 Pași</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetSteps}>
          <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',  
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  stepCount: {
    fontSize: 72,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 40,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#fff',
  },
  resetButtonText: {
    color: '#ff6f61',
  },
});
