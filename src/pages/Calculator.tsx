import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

interface PatientData {
  weight: number;
  age: number;
  renalFunction: number;
}

interface MedicationInfo {
  name: string;
  dosage: number;
  unit: string;
}

const Calculator: React.FC = () => {
  const [patientData, setPatientData] = useState<PatientData>({
    weight: 0,
    age: 0,
    renalFunction: 100,
  });

  const [medicationInfo, setMedicationInfo] = useState<MedicationInfo>({
    name: '',
    dosage: 0,
    unit: 'mg',
  });

  const [calculatedDosage, setCalculatedDosage] = useState<string | null>(null);

  const handlePatientDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleMedicationInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMedicationInfo((prev) => ({ ...prev, [name]: name === 'dosage' ? parseFloat(value) || 0 : value }));
  };

  const calculateDosage = () => {
    const baseDosage = medicationInfo.dosage * (patientData.weight / 70);
    let adjustedDosage = baseDosage;

    if (patientData.age > 65) {
      adjustedDosage *= 0.8;
    }

    if (patientData.renalFunction < 60) {
      adjustedDosage *= 0.7;
    }

    if (adjustedDosage > 1000) { // Example safety check
      Alert.alert('Warning', 'Calculated dosage exceeds safe limits!');
    } else {
      setCalculatedDosage(`${adjustedDosage.toFixed(2)} ${medicationInfo.unit}`);
      Alert.alert('Success', 'Dosage calculated successfully!');
    }
  };

  const saveCalculation = () => {
    // In a real app, you'd save this to a database or local storage
    toast.success('Calculation saved!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Dosage Calculator</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Patient Information</Text>
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              keyboardType="numeric"
              name="weight"
              value={patientData.weight.toString()}
              onChangeText={(value) => handlePatientDataChange({ target: { name: 'weight', value } })}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              keyboardType="numeric"
              name="age"
              value={patientData.age.toString()}
              onChangeText={(value) => handlePatientDataChange({ target: { name: 'age', value } })}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Renal Function (%)</Text>
            <TextInput
              keyboardType="numeric"
              name="renalFunction"
              value={patientData.renalFunction.toString()}
              onChangeText={(value) => handlePatientDataChange({ target: { name: 'renalFunction', value } })}
              style={styles.input}
            />
          </View>
        </View>

        <Text style={styles.subtitle}>Medication Information</Text>
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Medication Name</Text>
            <TextInput
              name="name"
              value={medicationInfo.name}
              onChangeText={(value) => handleMedicationInfoChange({ target: { name: 'name', value } })}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Base Dosage</Text>
            <TextInput
              keyboardType="numeric"
              name="dosage"
              value={medicationInfo.dosage.toString()}
              onChangeText={(value) => handleMedicationInfoChange({ target: { name: 'dosage', value } })}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Unit</Text>
            <TextInput
              name="unit"
              value={medicationInfo.unit}
              onChangeText={(value) => handleMedicationInfoChange({ target: { name: 'unit', value } })}
              style={styles.input}
            />
          </View>
        </View>

        <Button
          onPress={calculateDosage}
          title="Calculate Dosage"
          color="#2563eb"
        />

        {calculatedDosage && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Calculated Dosage:</Text>
            <Text style={styles.result}>{calculatedDosage}</Text>
            <Button
              onPress={saveCalculation}
              title="Save Calculation"
              color="#16a34a"
            />
          </View>
        )}
      </View>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#d1fae5',
    borderRadius: 8,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#065f46',
  },
});

export default Calculator;
