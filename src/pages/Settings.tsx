import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings: React.FC = () => {
  const [units, setUnits] = useState('metric');
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedUnits = await AsyncStorage.getItem('units');
        const savedTheme = await AsyncStorage.getItem('theme');
        const savedNotifications = await AsyncStorage.getItem('notifications');
        if (savedUnits) setUnits(savedUnits);
        if (savedTheme) setTheme(savedTheme);
        if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
      } catch (error) {
        console.error('Failed to load settings', error);
      }
    };
    loadSettings();
  }, []);

  const handleSaveSettings = async () => {
    try {
      await AsyncStorage.setItem('units', units);
      await AsyncStorage.setItem('theme', theme);
      await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Failed to save settings', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Units of Measurement</Text>
          <View style={styles.switchContainer}>
            <Text>Metric</Text>
            <Switch
              value={units === 'metric'}
              onValueChange={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}
            />
            <Text>Imperial</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Theme</Text>
          <View style={styles.switchContainer}>
            <Text>Light</Text>
            <Switch
              value={theme === 'light'}
              onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <Text>Dark</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={() => setNotifications(!notifications)}
          />
        </View>

        <Button
          onPress={handleSaveSettings}
          title="Save Settings"
          color="#2563eb"
        />
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
  section: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Settings;
