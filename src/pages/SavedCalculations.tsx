import React from 'react';

const SavedCalculations: React.FC = () => {
  // In a real app, you'd fetch saved calculations from a database or local storage
  const savedCalculations = [
    { id: 1, medication: 'Ibuprofen', dosage: '400 mg', date: '2023-04-15' },
    { id: 2, medication: 'Amoxicillin', dosage: '500 mg', date: '2023-04-14' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Saved Calculations</h2>
      {savedCalculations.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medication
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {savedCalculations.map((calc) => (
                <tr key={calc.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{calc.medication}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{calc.dosage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{calc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No saved calculations yet.</p>
      )}
    </div>
  );
};

export default SavedCalculations;