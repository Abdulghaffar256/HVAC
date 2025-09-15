"use client";

import React, { useState, useEffect } from "react";

const HeatTransferCalculator2 = ({ onResultChange, updateKey }) => {
  // ✅ Fixed directions like exwall
  const directions = ["North", "South", "East", "West", "Horizontal"];

  const [inputs, setInputs] = useState(
    directions.reduce(
      (acc, dir) => ({
        ...acc,
        [dir]: { length: 0, height: 0, shgf: "20° N", sc: "Clear Glass Without Shading", clf: "N" },
      }),
      {}
    )
  );

  const [results, setResults] = useState({});

  // 🔹 Reset when parent triggers updateKey
  useEffect(() => {
    setInputs(
      directions.reduce(
        (acc, dir) => ({
          ...acc,
          [dir]: { length: 0, height: 0, shgf: "20° N", sc: "Clear Glass Without Shading", clf: "N" },
        }),
        {}
      )
    );
    setResults({});
    if (onResultChange) onResultChange(0);
  }, [updateKey]);

  const shgfValues = {
    "20° N": 250,
    "24° N": 240,
    "28° N": 280,
    "32° N": 246,
    "36° N": 252,
    "40° N": 205,
    "44° N": 189,
    "48° N": 216,
  };

  const shadingCoefficients = {
    "Clear Glass Without Shading": 0.94,
    "Heat Absorbing Without Shading": 0.69,
    "Clear Glass with Medium Venetian Blinds": 0.74,
    "Heat Absorbing with Medium Venetian Blinds": 0.57,
  };

  const clfValues = {
    N: 0.91,
    NE: 0.76,
    E: 0.72,
    SE: 0.81,
    S: 0.85,
    SW: 0.83,
    W: 0.72,
    NW: 0.71,
    H: 0.65, // 🔹 Horizontal (roof windows/skylights)
  };

  const handleChange = (dir, field, value) => {
    setInputs((prev) => ({
      ...prev,
      [dir]: {
        ...prev[dir],
        [field]: field === "length" || field === "height" ? parseFloat(value) || 0 : value,
      },
    }));
  };

  const calculateHeatTransfer = () => {
    const calcResults = {};
    let total = 0;

    directions.forEach((dir) => {
      const { length, height, shgf, sc, clf } = inputs[dir];
      if (length > 0 && height > 0) {
        const area = length * height;
        const q = (shgfValues[shgf] || 0) * area * (shadingCoefficients[sc] || 1) * (clfValues[clf] || 1);
        calcResults[dir] = q;
        total += q;
      } else {
        calcResults[dir] = 0;
      }
    });

    setResults(calcResults);
    if (onResultChange) onResultChange(total);
  };

  const totalLoad = Object.values(results).reduce((a, b) => a + b, 0);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Exterior Glass
      </h1>

      {directions.map((dir) => (
        <div key={dir} className="border p-4 mb-4 rounded-lg bg-white shadow-sm">
          <h2 className="font-semibold mb-2">{dir} Glass</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Length (ft):</label>
              <input
                type="number"
                value={inputs[dir].length}
                onChange={(e) => handleChange(dir, "length", e.target.value)}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Height (ft):</label>
              <input
                type="number"
                value={inputs[dir].height}
                onChange={(e) => handleChange(dir, "height", e.target.value)}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">SHGF Latitude:</label>
              <select
                value={inputs[dir].shgf}
                onChange={(e) => handleChange(dir, "shgf", e.target.value)}
                className="w-full p-2 border rounded"
              >
                {Object.keys(shgfValues).map((lat) => (
                  <option key={lat} value={lat}>
                    {lat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Shading Coefficient:</label>
              <select
                value={inputs[dir].sc}
                onChange={(e) => handleChange(dir, "sc", e.target.value)}
                className="w-full p-2 border rounded"
              >
                {Object.keys(shadingCoefficients).map((sc) => (
                  <option key={sc} value={sc}>
                    {sc}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Cooling Load Factor (CLF):</label>
              <select
                value={inputs[dir].clf}
                onChange={(e) => handleChange(dir, "clf", e.target.value)}
                className="w-full p-2 border rounded"
              >
                {Object.keys(clfValues).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {results[dir] !== undefined && (
            <p className="mt-2 text-blue-600 font-semibold">
              Result: {results[dir].toFixed(2)} BTU/hr
            </p>
          )}
        </div>
      ))}

      <button
        onClick={calculateHeatTransfer}
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
      >
        Calculate Heat Transfer
      </button>

      {totalLoad > 0 && (
        <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded text-center font-bold text-blue-700">
          Total Glass Load: {totalLoad.toFixed(2)} BTU/hr
        </div>
      )}
    </div>
  );
};

export default HeatTransferCalculator2;
