"use client";

import React, { useState, useEffect } from "react";

const HeatTransferCalculator2 = ({ onResultChange, updateKey }) => {
  const [glassInputs, setGlassInputs] = useState([
    {
      direction: "South",
      length: 0,
      height: 0,
      shgf: "20° N",
      sc: "Clear Glass Without Shading",
      clf: "S",
    },
  ]);

  const [results, setResults] = useState([]);

  // 🔹 Reset when parent triggers updateKey
  useEffect(() => {
    setGlassInputs([
      {
        direction: "South",
        length: 0,
        height: 0,
        shgf: "20° N",
        sc: "Clear Glass Without Shading",
        clf: "S",
      },
    ]);
    setResults([]);
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

  const directions = ["North", "South", "East", "West", "Horizontal"];

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setGlassInputs((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]:
                name === "length" || name === "height"
                  ? parseFloat(value) || 0
                  : value,
            }
          : item
      )
    );
  };

  const addDirection = () => {
    setGlassInputs((prev) => [
      ...prev,
      {
        direction: "North",
        length: 0,
        height: 0,
        shgf: "20° N",
        sc: "Clear Glass Without Shading",
        clf: "N",
      },
    ]);
  };

  const calculateHeatTransfer = () => {
    const calcResults = glassInputs.map((glass) => {
      const { length, height, shgf, sc, clf, direction } = glass;

      if (length <= 0 || height <= 0) return { direction, value: 0 };

      const area = length * height;
      const selectedSHGF = shgfValues[shgf] || 0;
      const selectedSC = shadingCoefficients[sc] || 1;
      const selectedCLF = clfValues[clf] || 1;

      const heatTransfer = selectedSHGF * area * selectedSC * selectedCLF;
      return { direction, value: heatTransfer };
    });

    setResults(calcResults);

    const total = calcResults.reduce((sum, r) => sum + r.value, 0);
    if (onResultChange) onResultChange(total);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Exterior Glass (Multi-Direction)
      </h1>

      {glassInputs.map((glass, index) => (
        <div
          key={index}
          className="border p-4 mb-4 rounded-lg bg-white shadow-sm"
        >
          <h2 className="font-semibold mb-2">
            Glass Section {index + 1} ({glass.direction})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Direction:</label>
              <select
                name="direction"
                value={glass.direction}
                onChange={(e) => handleChange(index, e)}
                className="w-full p-2 border rounded"
              >
                {directions.map((dir) => (
                  <option key={dir} value={dir}>
                    {dir}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Length (ft):</label>
              <input
                type="number"
                name="length"
                value={glass.length}
                onChange={(e) => handleChange(index, e)}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Height (ft):</label>
              <input
                type="number"
                name="height"
                value={glass.height}
                onChange={(e) => handleChange(index, e)}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">SHGF Latitude:</label>
              <select
                name="shgf"
                value={glass.shgf}
                onChange={(e) => handleChange(index, e)}
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
              <label className="block mb-1 font-medium">
                Shading Coefficient:
              </label>
              <select
                name="sc"
                value={glass.sc}
                onChange={(e) => handleChange(index, e)}
                className="w-full p-2 border rounded"
              >
                {Object.keys(shadingCoefficients).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Cooling Load Factor (CLF):</label>
              <select
                name="clf"
                value={glass.clf}
                onChange={(e) => handleChange(index, e)}
                className="w-full p-2 border rounded"
              >
                {Object.keys(clfValues).map((facing) => (
                  <option key={facing} value={facing}>
                    {facing}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-4 mb-6">
        <button
          onClick={addDirection}
          className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 transition duration-300"
        >
          + Add Another Direction
        </button>

        <button
          onClick={calculateHeatTransfer}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
        >
          Calculate Heat Transfer
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Results Breakdown</h2>
          {results.map((res, i) => (
            <p key={i} className="text-lg">
              {res.direction}: <strong>{res.value.toFixed(2)} BTU/hr</strong>
            </p>
          ))}
          <p className="mt-2 text-xl font-bold text-blue-700">
            Total:{" "}
            {results.reduce((sum, r) => sum + r.value, 0).toFixed(2)} BTU/hr
          </p>
        </div>
      )}
    </div>
  );
};

export default HeatTransferCalculator2;
