'use client';
import { useState } from 'react';

export default function AirVelocityConverter() {
  const [mps, setMps] = useState('');
  const [result, setResult] = useState({
    fpm: '',
    kph: '',
    mph: '',
    knots: '',
  });
  const [error, setError] = useState('');

  const convert = () => {
    const m = parseFloat(mps);
    if (isNaN(m) || m < 0) {
      setError('Please enter a valid non-negative number for m/s.');
      setResult({ fpm: '', kph: '', mph: '', knots: '' });
      return;
    }
    setError('');
    setResult({
      fpm: (m * 196.8504).toFixed(2),  // Feet per minute
      kph: (m * 3.6).toFixed(2),       // Kilometers per hour
      mph: (m * 2.23694).toFixed(2),   // Miles per hour
      knots: (m * 1.94384).toFixed(2), // Knots
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Air Velocity Converter
      </h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Velocity (m/s)</label>
        <input
          type="number"
          value={mps}
          onChange={(e) => setMps(e.target.value)}
          placeholder="Enter value in meters per second"
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

      {(result.fpm || result.kph || result.mph || result.knots) && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold mb-2">Converted Values:</h3>
          <p><strong>Feet per Minute (FPM):</strong> {result.fpm}</p>
          <p><strong>Kilometers per Hour (km/h):</strong> {result.kph}</p>
          <p><strong>Miles per Hour (mph):</strong> {result.mph}</p>
          <p><strong>Knots:</strong> {result.knots}</p>
        </div>
      )}
    </div>
  );
}
