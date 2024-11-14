import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

const SavedCalculations: React.FC = () => {
  const [savedCalculations, setSavedCalculations] = useState([]);

  useEffect(() => {
    const fetchSavedCalculations = async () => {
      try {
        const savedData = await AsyncStorage.getItem('savedCalculations');
        if (savedData) {
          setSavedCalculations(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Failed to load saved calculations', error);
      }
    };

    fetchSavedCalculations();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Calculations</Text>
      {savedCalculations.length > 0 ? (
        <View style={styles.listContainer}>
          {savedCalculations.map((calc) => (
            <View key={calc.id} style={styles.row}>
              <Text style={styles.cell}>{calc.medication}</Text>
              <Text style={styles.cell}>{calc.dosage}</Text>
              <Text style={styles.cell}>{calc.date}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.noDataText}>No saved calculations yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  cell: {
    fontSize: 16,
    color: '#374151',
  },
  noDataText: {
    textAlign: 'center',
    color: '#9ca3af',
  },
});

export default SavedCalculations;
