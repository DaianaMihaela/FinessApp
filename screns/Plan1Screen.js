import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Plan1Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan 1: 1000 Calories </Text>
      <Image source={require('../assets/images/plan1.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Un antrenament complet pentru arderea caloriilor, potrivit pentru începători care vor să slăbească într-un mod echilibrat. Include exerciții diverse pentru tonifiere și rezistență.
      </Text>
      <Text style={styles.list}>✔ Leg Raise - 45x3</Text>
      <Text style={styles.list}>✔ Russian Twist - 35x3</Text>
      <Text style={styles.list}>✔ Lunges - 35x4</Text>
      <Text style={styles.list}>✔ Plank - 9 min</Text>
      <Text style={styles.list}>✔ Hell Touch - 35x3</Text>
      <Text style={styles.list}>✔ Side Plank - 7 min</Text>
      <Text style={styles.list}>✔ Knee Pull Ins - 45x3</Text>
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
