import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import SavedCalculations from './pages/SavedCalculations';
import Settings from './pages/Settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="SavedCalculations" component={SavedCalculations} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </main>
        <Toaster position="bottom-center" />
      </div>
    </NavigationContainer>
  );
}

export default App;
