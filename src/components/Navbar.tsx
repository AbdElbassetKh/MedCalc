import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator, Save, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">MedCalc</Link>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center"><Home size={20} className="mr-1" /> Home</Link>
            <Link to="/calculator" className="flex items-center"><Calculator size={20} className="mr-1" /> Calculator</Link>
            <Link to="/saved" className="flex items-center"><Save size={20} className="mr-1" /> Saved</Link>
            <Link to="/settings" className="flex items-center"><Settings size={20} className="mr-1" /> Settings</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;