import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Plan3Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan 3: Remove Belly In 7 Days</Text>
      <Image source={require('../assets/images/plan3.jpg')} style={styles.image} />
      <Text style={styles.text}>
       Un program intens și rapid pentru reducerea abdomenului, combinând exerciții de forță și cardio pentru rezultate vizibile într-o săptămână.
      </Text>
      <Text style={styles.list}>✔ Lunges - 70 Reps</Text>
      <Text style={styles.list}>✔ Push Ups - 90 Reps</Text>
      <Text style={styles.list}>✔ Plank - 7 min</Text>
      <Text style={styles.list}>✔ Push Ups - 45 Reps</Text>
      <Text style={styles.list}>✔ Cruches - 30 Reps</Text>
      <Text style={styles.list}>✔ Bicycle Cruches - 3 min</Text>
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
