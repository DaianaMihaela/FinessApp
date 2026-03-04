import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WorkoutCard({ workout, onDelete }) {
  return (
    <View style={styles.card}>
      <Image source={workout.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{workout.title}</Text>
        <Text style={styles.details}>Durata: {workout.duration} min | Sesiuni: {workout.sessions}</Text>
        {onDelete && (
          <TouchableOpacity onPress={() => onDelete(workout.id)} style={styles.deleteBtn}>
            <Text style={styles.deleteText}>Șterge</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    marginVertical: 5,
    fontSize: 14,
    color: '#555',
  },
  deleteBtn: {
    backgroundColor: '#ff4d4d',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
