import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setSeconds(0);
    setLaps([]);
  };

  const lapTimer = () => {
    if (running) {
      setLaps((prev) => [seconds, ...prev]);
    }
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins < 10 ? '0' + mins : mins}:${
      secs < 10 ? '0' + secs : secs
    }`;
  };

  return (
    <ImageBackground
      source={require('../assets/images/clock-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Cronometru</Text>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStart} onPress={startTimer}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLap} onPress={lapTimer} disabled={!running}>
            <Text style={[styles.buttonText, !running && {opacity: 0.5}]}>Lap</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStop} onPress={stopTimer}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonReset} onPress={resetTimer}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.lapsContainer}>
          {laps.length === 0 ? (
            <Text style={styles.noLapsText}>Nicio înregistrare Lap</Text>
          ) : (
            laps.map((lapTime, index) => (
              <View key={index} style={styles.lapItem}>
                <Text style={styles.lapText}>Lap {laps.length - index}</Text>
                <Text style={styles.lapText}>{formatTime(lapTime)}</Text>
              </View>
            ))
          )}
        </ScrollView>
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
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonStart: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    margin: 10,
    minWidth: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  buttonStop: {
    backgroundColor: '#F44336',
    padding: 15,
    borderRadius: 30,
    margin: 10,
    minWidth: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  buttonReset: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 30,
    margin: 10,
    minWidth: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  buttonLap: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 30,
    margin: 10,
    minWidth: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  lapsContainer: {
    width: '100%',
    maxHeight: 150,
  },
  lapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 3,
  },
  lapText: {
    color: '#fff',
    fontSize: 16,
  },
  noLapsText: {
    color: '#ccc',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
});
