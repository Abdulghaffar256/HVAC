'use client';
import { useState } from 'react';

export default function FlowRateConverter() {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('m³/s');
  const [to, setTo] = useState('CFM');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const flowUnits = ['m³/s', 'm³/h', 'L/s', 'CFM', 'GPM'];

  const convertFlowRate = () => {
    const value = parseFloat(input);
    if (isNaN(value) || value < 0) {
      setError('Please enter a valid non-negative number.');
      setResult('');
      return;
    }
    setError('');

    let m3ps;

    // Convert to m³/s first
    switch (from) {
      case 'm³/s':
        m3ps = value;
        break;
      case 'm³/h':
        m3ps = value / 3600;
        break;
      case 'L/s':
        m3ps = value / 1000;
        break;
      case 'CFM':
        m3ps = value / 2118.88;
        break;
      case 'GPM':
        m3ps = value * 0.0000630902;
        break;
      default:
        m3ps = value;
    }

    // Convert from m³/s to desired unit
    let converted;
    switch (to) {
      case 'm³/s':
        converted = m3ps;
        break;
      case 'm³/h':
        converted = m3ps * 3600;
        break;
      case 'L/s':
        converted = m3ps * 1000;
        break;
      case 'CFM':
        converted = m3ps * 2118.88;
        break;
      case 'GPM':
        converted = m3ps / 0.0000630902;
        break;
      default:
        converted = m3ps;
    }

    setResult(`${converted.toFixed(4)} ${to}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Flow Rate Converter</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Value</label>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter flow rate"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">From</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            {flowUnits.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">To</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            {flowUnits.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={convertFlowRate}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Convert
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {result && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}
