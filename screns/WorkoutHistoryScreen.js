import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import { initialWorkouts } from '../data/workouts';

export default function WorkoutHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Istoric Antrenamente</Text>
      <FlatList
        data={initialWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutCard workout={item} showDelete={false} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f0f4f7' },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
});
