'use client';
import { useState } from 'react';

export default function PressureConverter() {
  const [pascal, setPascal] = useState('');
  const [result, setResult] = useState({
    psi: '',
    bar: '',
    kpa: '',
    atm: '',
    mmhg: '',
    inhg: '',
  });
  const [error, setError] = useState('');

  const convert = () => {
    const p = parseFloat(pascal);
    if (isNaN(p) || p < 0) {
      setError('Please enter a valid non-negative number.');
      return;
    }
    setError('');

    setResult({
      psi: (p * 0.0001450377).toFixed(4),
      bar: (p * 0.00001).toFixed(4),
      kpa: (p / 1000).toFixed(3),
      atm: (p / 101325).toFixed(5),
      mmhg: (p * 0.00750062).toFixed(2),
      inhg: (p * 0.0002953).toFixed(4),
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Pressure Converter
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Value (Pa)</label>
        <input
          type="number"
          value={pascal}
          onChange={(e) => setPascal(e.target.value)}
          placeholder="Enter pressure in pascals"
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

      {result.psi && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold mb-2">Results:</h3>
          <ul className="space-y-1">
            <li><strong>psi:</strong> {result.psi} psi</li>
            <li><strong>bar:</strong> {result.bar} bar</li>
            <li><strong>kPa:</strong> {result.kpa} kPa</li>
            <li><strong>atm:</strong> {result.atm} atm</li>
            <li><strong>mmHg:</strong> {result.mmhg} mmHg</li>
            <li><strong>inHg:</strong> {result.inhg} inHg</li>
          </ul>
        </div>
      )}
    </div>
  );
}

