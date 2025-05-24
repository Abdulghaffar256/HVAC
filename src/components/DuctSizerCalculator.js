'use client';

import { useState } from 'react';

export default function DuctSizerCalculator() {
  const [cfm, setCfm] = useState('');
  const [velocity, setVelocity] = useState('');
  const [ductType, setDuctType] = useState('round');
  const [results, setResults] = useState(null);

  const calculateDuctSize = () => {
    const c = parseFloat(cfm);
    const v = parseFloat(velocity);

    if (!isNaN(c) && !isNaN(v) && v > 0) {
      const area = c / v; // in ft²
      let roundDiameter = null;
      let width = null;
      let height = null;

      if (ductType === 'round') {
        roundDiameter = Math.sqrt((4 * area) / Math.PI); // in ft
        setResults({
          area: area.toFixed(4),
          roundDiameter: (roundDiameter * 12).toFixed(2), // inches
          width: null,
          height: null,
        });
      } else {
        width = Math.sqrt(area);
        height = area / width;
        setResults({
          area: area.toFixed(4),
          roundDiameter: null,
          width: (width * 12).toFixed(2),
          height: (height * 12).toFixed(2),
        });
      }
    } else {
      setResults(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Duct Sizer Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          placeholder="Airflow (CFM)"
          value={cfm}
          onChange={(e) => setCfm(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Velocity (FPM)"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <div className="col-span-1 md:col-span-2 flex justify-center gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="ductType"
              value="round"
              checked={ductType === 'round'}
              onChange={(e) => setDuctType(e.target.value)}
            />
            <span>Round Duct</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="ductType"
              value="rectangular"
              checked={ductType === 'rectangular'}
              onChange={(e) => setDuctType(e.target.value)}
            />
            <span>Rectangular Duct</span>
          </label>
        </div>
      </div>

      <button
        onClick={calculateDuctSize}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-lg font-medium"
      >
        Calculate
      </button>

      {results && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg space-y-2 text-lg text-center">
          <p>Required Area: <span className="font-semibold text-blue-600">{results.area} ft²</span></p>
          {results.roundDiameter && (
            <p>Round Duct Diameter: <span className="font-semibold text-blue-600">{results.roundDiameter} in</span></p>
          )}
          {results.width && results.height && (
            <p>
              Rectangular Duct Size: <span className="font-semibold text-blue-600">{results.width}" × {results.height}"</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

