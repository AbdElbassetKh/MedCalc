import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Save } from 'lucide-react';

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
    // This is a simplified calculation. In a real-world scenario, you'd need more complex logic
    // and potentially integration with a medication database for accurate dosing.
    const baseDosage = medicationInfo.dosage * (patientData.weight / 70);
    let adjustedDosage = baseDosage;

    // Age adjustment (simplified)
    if (patientData.age > 65) {
      adjustedDosage *= 0.8;
    }

    // Renal function adjustment (simplified)
    if (patientData.renalFunction < 60) {
      adjustedDosage *= 0.7;
    }

    setCalculatedDosage(`${adjustedDosage.toFixed(2)} ${medicationInfo.unit}`);
    toast.success('Dosage calculated successfully!');
  };

  const saveCalculation = () => {
    // In a real app, you'd save this to a database or local storage
    toast.success('Calculation saved!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Medication Dosage Calculator</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Patient Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={patientData.weight}
              onChange={handlePatientDataChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={patientData.age}
              onChange={handlePatientDataChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Renal Function (%)</label>
            <input
              type="number"
              name="renalFunction"
              value={patientData.renalFunction}
              onChange={handlePatientDataChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Medication Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Medication Name</label>
            <input
              type="text"
              name="name"
              value={medicationInfo.name}
              onChange={handleMedicationInfoChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Base Dosage</label>
            <input
              type="number"
              name="dosage"
              value={medicationInfo.dosage}
              onChange={handleMedicationInfoChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Unit</label>
            <select
              name="unit"
              value={medicationInfo.unit}
              onChange={handleMedicationInfoChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="mg">mg</option>
              <option value="mcg">mcg</option>
              <option value="mL">mL</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculateDosage}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Calculate Dosage
        </button>

        {calculatedDosage && (
          <div className="mt-6 p-4 bg-green-100 rounded-md">
            <h4 className="text-lg font-semibold mb-2">Calculated Dosage:</h4>
            <p className="text-2xl font-bold text-green-800">{calculatedDosage}</p>
            <button
              onClick={saveCalculation}
              className="mt-4 flex items-center justify-center w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              <Save size={20} className="mr-2" /> Save Calculation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;