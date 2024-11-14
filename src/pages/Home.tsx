import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight } from 'lucide-react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MedCalc</Text>
      <Text style={styles.description}>
        Improve patient care with accurate medication dosage calculations
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Calculator')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start Calculating</Text>
        <ArrowRight size={20} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.featuresContainer}>
        <FeatureCard
          title="Accurate Dosages"
          description="Calculate precise medication dosages based on patient data"
        />
        <FeatureCard
          title="Offline Access"
          description="Use the app even without an internet connection"
        />
        <FeatureCard
          title="Data Privacy"
          description="Secure storage of patient information adhering to healthcare regulations"
        />
      </View>
    </View>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 8,
    color: '#fff',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '30%',
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
});

export default Home;
