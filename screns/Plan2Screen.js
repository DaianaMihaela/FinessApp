import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Plan2Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan 2: Reduce Belly Fat in 21 Days</Text>
      <Image source={require('../assets/images/plan2.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Concentrează-te pe zona abdominală cu exerciții care ard grăsimea și cresc rezistența, special creat pentru a remodela talia în doar 3 săptămâni.
      </Text>
      <Text style={styles.list}>✔ JHell Touch - 45 Reps/Side</Text>
      <Text style={styles.list}>✔ Lunges - 45 Reps/Leg</Text>
      <Text style={styles.list}>✔ Russian Twist - 45 Reps/Side</Text>
      <Text style={styles.list}>✔ Leg Raise Hold - 2 min</Text>
      <Text style={styles.list}>✔ Side Plank - 3 min</Text>
      <Text style={styles.list}>✔ Forearm Plank - 5 min</Text>
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
