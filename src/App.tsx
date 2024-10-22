import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import SavedCalculations from './pages/SavedCalculations';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/saved" element={<SavedCalculations />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Toaster position="bottom-center" />
      </div>
    </Router>
  );
}

export default App;