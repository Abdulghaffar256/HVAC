'use client';
import { useState } from 'react';

export default function TemperatureConverter() {
  const [input, setInput] = useState('');
  const [unit, setUnit] = useState('C');
  const [result, setResult] = useState({ C: '', F: '', K: '' });
  const [error, setError] = useState('');

  const convert = () => {
    const val = parseFloat(input);
    if (isNaN(val)) {
      setError('Please enter a valid number.');
      return;
    }
    setError('');

    let celsius;

    switch (unit) {
      case 'C':
        celsius = val;
        break;
      case 'F':
        celsius = (val - 32) * 5 / 9;
        break;
      case 'K':
        celsius = val - 273.15;
        break;
      default:
        celsius = val;
    }

    setResult({
      C: celsius.toFixed(2),
      F: (celsius * 9 / 5 + 32).toFixed(2),
      K: (celsius + 273.15).toFixed(2),
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Temperature Converter
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Temperature Value</label>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Unit</label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="C">°C (Celsius)</option>
          <option value="F">°F (Fahrenheit)</option>
          <option value="K">K (Kelvin)</option>
        </select>
      </div>

      <button
        onClick={convert}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Convert
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {result.C && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold mb-2">Results:</h3>
          <ul className="space-y-1">
            <li><strong>Celsius:</strong> {result.C} °C</li>
            <li><strong>Fahrenheit:</strong> {result.F} °F</li>
            <li><strong>Kelvin:</strong> {result.K} K</li>
          </ul>
        </div>
      )}
    </div>
  );
}
