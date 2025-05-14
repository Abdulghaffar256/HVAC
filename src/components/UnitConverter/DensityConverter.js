'use client';
import { useState } from 'react';

export default function DensityConverter() {
  const [kgm3, setKgm3] = useState('');
  const [result, setResult] = useState({
    lbft3: '',
    gcm3: '',
    lbin3: '',
  });
  const [error, setError] = useState('');

  const convert = () => {
    const d = parseFloat(kgm3);
    if (isNaN(d) || d < 0) {
      setError('Please enter a valid non-negative number for kg/m³.');
      setResult({ lbft3: '', gcm3: '', lbin3: '' });
      return;
    }
    setError('');
    setResult({
      lbft3: (d * 0.06242796).toFixed(4),
      gcm3: (d / 1000).toFixed(6),
      lbin3: (d * 3.61273e-5).toFixed(6),
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Density Converter
      </h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Density (kg/m³)</label>
        <input
          type="number"
          value={kgm3}
          onChange={(e) => setKgm3(e.target.value)}
          placeholder="Enter value in kg/m³"
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

      {(result.lbft3 || result.gcm3 || result.lbin3) && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold mb-2">Converted Values:</h3>
          <p><strong>Pounds per Cubic Foot (lb/ft³):</strong> {result.lbft3}</p>
          <p><strong>Grams per Cubic Centimeter (g/cm³):</strong> {result.gcm3}</p>
          <p><strong>Pounds per Cubic Inch (lb/in³):</strong> {result.lbin3}</p>
        </div>
      )}
    </div>
  );
}
