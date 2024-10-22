import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Settings: React.FC = () => {
  const [units, setUnits] = useState('metric');
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleSaveSettings = () => {
    // In a real app, you'd save these settings to a database or local storage
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Units of Measurement</h3>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="units"
                value="metric"
                checked={units === 'metric'}
                onChange={() => setUnits('metric')}
              />
              <span className="ml-2">Metric</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="units"
                value="imperial"
                checked={units === 'imperial'}
                onChange={() => setUnits('imperial')}
              />
              <span className="ml-2">Imperial</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Theme</h3>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Notifications</h3>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="ml-2">Enable notifications</span>
          </label>
        </div>

        <button
          onClick={handleSaveSettings}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;