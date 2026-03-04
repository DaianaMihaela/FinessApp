import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const plans = [
  { id: 'Plan1', title: 'Plan 1: 1000 Calories' },
  { id: 'Plan2', title: 'Plan 2: Reduce Belly Fat' },
  { id: 'Plan3', title: 'Plan 3: Remove Belly In 7 Days' },
  { id: 'Plan4', title: 'Plan 4: 8 KG Weight Loss' },
  { id: 'Plan5', title: 'Plan 5: Quick Morning Workout' },
];

export default function PlansScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Planuri de Fitness</Text>
      {plans.map(plan => (
        <TouchableOpacity
          key={plan.id}
          style={styles.planButton}
          onPress={() => navigation.navigate(plan.id)}
        >
          <Text style={styles.planText}>{plan.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f0f4f7',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  planButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  planText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
