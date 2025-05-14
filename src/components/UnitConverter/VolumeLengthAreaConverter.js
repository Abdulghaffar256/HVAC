'use client';
import { useState } from 'react';

export default function VolumeLengthAreaConverter() {
  const [volume, setVolume] = useState('');
  const [length, setLength] = useState('');
  const [area, setArea] = useState('');
  const [results, setResults] = useState({
    liter: '', cubicFeet: '', cubicInch: '', gallon: '',
    cm: '', inch: '', foot: '', yard: '',
    squareFeet: '', squareInch: '', squareCm: '', squareYard: ''
  });

  const convert = () => {
    const v = parseFloat(volume);
    const l = parseFloat(length);
    const a = parseFloat(area);

    setResults({
      // Volume conversions
      liter: isNaN(v) ? '' : (v * 1000).toFixed(2),
      cubicFeet: isNaN(v) ? '' : (v * 35.3147).toFixed(2),
      cubicInch: isNaN(v) ? '' : (v * 61023.7).toFixed(2),
      gallon: isNaN(v) ? '' : (v * 264.172).toFixed(2),

      // Length conversions
      cm: isNaN(l) ? '' : (l * 100).toFixed(2),
      inch: isNaN(l) ? '' : (l * 39.3701).toFixed(2),
      foot: isNaN(l) ? '' : (l * 3.28084).toFixed(2),
      yard: isNaN(l) ? '' : (l * 1.09361).toFixed(2),

      // Area conversions
      squareFeet: isNaN(a) ? '' : (a * 10.7639).toFixed(2),
      squareInch: isNaN(a) ? '' : (a * 1550.0031).toFixed(2),
      squareCm: isNaN(a) ? '' : (a * 10000).toFixed(2),
      squareYard: isNaN(a) ? '' : (a * 1.19599).toFixed(2),
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Volume, Length & Area Converter</h2>

      {/* Volume Section */}
      <div className="mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
        <h4 className="text-lg font-semibold mb-2">Volume (m³)</h4>
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="Enter volume in m³"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-1">
          <li><strong>Liters:</strong> {results.liter}</li>
          <li><strong>ft³:</strong> {results.cubicFeet}</li>
          <li><strong>in³:</strong> {results.cubicInch}</li>
          <li><strong>Gallons (US):</strong> {results.gallon}</li>
        </ul>
      </div>

      {/* Length Section */}
      <div className="mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
        <h4 className="text-lg font-semibold mb-2">Length (meters)</h4>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Enter length in meters"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-1">
          <li><strong>Centimeters:</strong> {results.cm} cm</li>
          <li><strong>Inches:</strong> {results.inch} in</li>
          <li><strong>Feet:</strong> {results.foot} ft</li>
          <li><strong>Yards:</strong> {results.yard} yd</li>
        </ul>
      </div>

      {/* Area Section */}
      <div className="mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
        <h4 className="text-lg font-semibold mb-2">Area (m²)</h4>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter area in m²"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-1">
          <li><strong>ft²:</strong> {results.squareFeet}</li>
          <li><strong>in²:</strong> {results.squareInch}</li>
          <li><strong>cm²:</strong> {results.squareCm}</li>
          <li><strong>yd²:</strong> {results.squareYard}</li>
        </ul>
      </div>

      <button
        onClick={convert}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Convert All
      </button>
    </div>
  );
}
