'use client';
import { useState } from 'react';

export default function MassFlowConverter() {
  const [kgs, setKgs] = useState('');
  const [result, setResult] = useState({
    lbmHr: '',
    gMin: '',
    kgH: '',
    lbmS: '',
    gS: '',
  });
  const [error, setError] = useState('');

  const convert = () => {
    const k = parseFloat(kgs);
    if (isNaN(k) || k < 0) {
      setError('Please enter a valid non-negative number.');
      return;
    }
    setError('');

    setResult({
      lbmHr: (k * 7936.64).toFixed(2),    // pounds per hour
      gMin: ((k * 1000) / 60).toFixed(2), // grams per minute
      kgH: (k * 3600).toFixed(2),         // kilograms per hour
      lbmS: (k * 2.20462).toFixed(4),     // pounds per second
      gS: (k * 1000).toFixed(2),          // grams per second
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Mass Flow Rate Converter</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Value (kg/s)</label>
        <input
          type="number"
          value={kgs}
          onChange={(e) => setKgs(e.target.value)}
          placeholder="Enter mass flow rate"
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

      {result.lbmHr && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold mb-2">Results:</h3>
          <ul className="space-y-1">
            <li><strong>lbm/hr:</strong> {result.lbmHr}</li>
            <li><strong>lbm/s:</strong> {result.lbmS}</li>
            <li><strong>g/s:</strong> {result.gS}</li>
            <li><strong>g/min:</strong> {result.gMin}</li>
            <li><strong>kg/h:</strong> {result.kgH}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

