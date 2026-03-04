import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

const planuri = [
  { id: 'Plan1', title: 'Plan 1: 1000 Calories', durata: 60 },
  { id: 'Plan2', title: 'Plan 2: Reduce Belly Fat', durata: 45 },
  { id: 'Plan3', title: 'Plan 3: Remove Belly In 7 Days', durata: 30 },
  { id: 'Plan4', title: 'Plan 4: 8 KG Weight Loss', durata: 50 },
  { id: 'Plan5', title: 'Plan 5: Quick Morning Workout', durata: 25 },
];

export default function AntrenamenteScreen() {
  const [listaMea, setListaMea] = useState([]);

  const adaugaInLista = (plan) => {
    if (listaMea.find(p => p.id === plan.id)) {
      Alert.alert('Plan deja adăugat!');
      return;
    }
    const listaNoua = [...listaMea, plan].sort((a, b) => a.durata - b.durata);
    setListaMea(listaNoua);
  };

  const stergeDinLista = (planId) => {
    const listaNoua = listaMea.filter(p => p.id !== planId);
    setListaMea(listaNoua);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Planuri disponibile:</Text>
      {planuri.map(plan => (
        <TouchableOpacity 
          key={plan.id} 
          style={styles.planButton}
          onPress={() => adaugaInLista(plan)}
        >
          <Text style={styles.planText}>{plan.title} - {plan.durata} min</Text>
        </TouchableOpacity>
      ))}

      <Text style={[styles.heading, { marginTop: 20 }]}>Lista mea de antrenamente:</Text>
      {listaMea.length === 0 ? (
        <Text style={styles.emptyText}>Nu ai adăugat încă antrenamente.</Text>
      ) : (
        <FlatList 
          data={listaMea}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.title} - {item.durata} min</Text>
              <TouchableOpacity onPress={() => stergeDinLista(item.id)}>
                <Text style={styles.deleteText}>Șterge</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f0f4f7' },
  heading: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  planButton: { backgroundColor: '#ff6f61', padding: 12, borderRadius: 8, marginVertical: 5 },
  planText: { color: '#fff', fontSize: 16 },
  emptyText: { fontStyle: 'italic', color: '#555' },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#fff', borderRadius: 8, marginVertical: 4 },
  deleteText: { color: 'red' },
});
