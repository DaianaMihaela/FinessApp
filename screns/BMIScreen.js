import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

export default function BMIScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      setMessage('Te rog completează toate câmpurile');
      setBmi(null);
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('Subponderal');
    } else if (bmiValue < 24.9) {
      setMessage('Greutate normală');
    } else if (bmiValue < 29.9) {
      setMessage('Supraponderal');
    } else {
      setMessage('Obezitate');
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <ImageBackground
      source={require('../assets/images/bmi-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.box}>
            <Text style={styles.title}>Calculator BMI</Text>

            <TextInput
              placeholder="Greutate (kg)"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
              style={styles.input}
            />
            <TextInput
              placeholder="Înălțime (cm)"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={calculateBMI}>
              <Text style={styles.buttonText}>Calculează</Text>
            </TouchableOpacity>

            {bmi && (
              <View style={styles.resultBox}>
                <Text style={styles.resultText}>BMI: {bmi}</Text>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            )}

            {(bmi || message) && (
              <TouchableOpacity style={styles.resetButton} onPress={reset}>
                <Text style={styles.resetButtonText}>Resetează</Text>
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 15,
    padding: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#f5deb3', 
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#000', 
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  resultBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  messageText: {
    fontSize: 20,
    marginTop: 5,
    color: '#666',
    fontStyle: 'italic',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 10,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
