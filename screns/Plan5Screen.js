import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Plan5Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan 5: Quick Morning Workout For Flatter Belly</Text>
      <Image source={require('../assets/images/plan5.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Un antrenament scurt și eficient pentru dimineți active, conceput să tonifieze rapid zona abdominală și să înceapă ziua cu energie maximă.
      </Text>
      <Text style={styles.list}>✔ Forearm Plank - 7 min</Text>
      <Text style={styles.list}>✔ Donkey Kick - 60 Reps</Text>
      <Text style={styles.list}>✔ Knee Pull Hold - 3 min</Text>
      <Text style={styles.list}>✔ Sit Ups Crunches - 45 Reps</Text>
      <Text style={styles.list}>✔ Squats - 90 Reps</Text>
      <Text style={styles.list}>✔ Side Lunges - 45 Reps/Leg</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#f0f4f7' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  image: { width: '100%', height: 500, borderRadius: 10, marginBottom: 15 },
  text: { fontSize: 16, marginBottom: 10 },
  list: { fontSize: 16, marginVertical: 2 },
});
