'use client';
import { useState } from 'react';

export default function EnergyConverter() {
  const [joules, setJoules] = useState('');
  const [result, setResult] = useState({
    kWh: '',
    BTU: '',
    cal: '',
    kcal: '',
    ftlb: '',
  });
  const [error, setError] = useState('');

  const convert = () => {
    const j = parseFloat(joules);
    if (isNaN(j) || j < 0) {
      setError('Please enter a valid non-negative number for Joules.');
      setResult({ kWh: '', BTU: '', cal: '', kcal: '', ftlb: '' });
      return;
    }
    setError('');
    setResult({
      kWh: (j / 3.6e6).toFixed(6),         // kilowatt-hours
      BTU: (j * 0.000947817).toFixed(3),   // British thermal units
      cal: (j * 0.2390057).toFixed(2),     // calories
      kcal: (j * 0.000239006).toFixed(4),  // kilocalories
      ftlb: (j * 0.737562).toFixed(2),     // foot-pounds
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Energy Converter
      </h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Energy (Joules)</label>
        <input
          type="number"
          value={joules}
          onChange={(e) => setJoules(e.target.value)}
          placeholder="Enter value in joules"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={convert}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Convert
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {(result.kWh || result.BTU || result.cal || result.kcal || result.ftlb) && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold mb-2">Converted Values:</h3>
          <p><strong>Kilowatt-hours (kWh):</strong> {result.kWh}</p>
          <p><strong>BTU (British Thermal Units):</strong> {result.BTU}</p>
          <p><strong>Calories (cal):</strong> {result.cal}</p>
          <p><strong>Kilocalories (kcal):</strong> {result.kcal}</p>
          <p><strong>Foot-pounds (ft-lb):</strong> {result.ftlb}</p>
        </div>
      )}
    </div>
  );
}
