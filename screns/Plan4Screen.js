import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Plan4Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan 4: 8 KG Weight Loss In 1 Month</Text>
      <Image source={require('../assets/images/plan4.jpg')} style={styles.image} />
      <Text style={styles.text}>
       Plan de slăbire pe termen mediu, axat pe mobilitate, flexibilitate și arderea grăsimilor, ideal pentru o transformare completă în 30 de zile.
      </Text>
      <Text style={styles.list}>✔ Bicycle Cruches - 45 Reps</Text>
      <Text style={styles.list}>✔ Russian Twist - 60 Reps</Text>
      <Text style={styles.list}>✔ Mountain Climber - 45 Reps</Text>
      <Text style={styles.list}>✔ Leg Raise - 60 Reps</Text>
      <Text style={styles.list}>✔ Glute Bridge - 45 Reps</Text>
      <Text style={styles.list}>✔ Lunges - 60 Reps</Text>
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
