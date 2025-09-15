"use client";

import React, { useState, useEffect } from "react";

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
  H: 0.65, // horizontal
};

const directions = ["North", "South", "East", "West", "Horizontal"];

const HeatTransferCalculator2 = ({ onResultChange, updateKey }) => {
  const [entries, setEntries] = useState({});
  const [inputs, setInputs] = useState({
    direction: "South",
    length: 0,
    height: 0,
    shgf: "20° N",
    sc: "Clear Glass Without Shading",
    clf: "S",
  });

  // 🔹 Reset when parent triggers updateKey
  useEffect(() => {
    setEntries({});
    setInputs({
      direction: "South",
      length: 0,
      height: 0,
      shgf: "20° N",
      sc: "Clear Glass Without Shading",
      clf: "S",
    });
    if (onResultChange) onResultChange({});
  }, [updateKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: name === "length" || name === "height" ? parseFloat(value) || 0 : value,
    }));
  };

  const addEntry = () => {
    const { direction, length, height, shgf, sc, clf } = inputs;

    if (length <= 0 || height <= 0) {
      alert("Please enter valid length and height.");
      return;
    }

    const area = length * height;
    const selectedSHGF = shgfValues[shgf] || 0;
    const selectedSC = shadingCoefficients[sc] || 1;
    const selectedCLF = clfValues[clf] || 1;

    const heatTransfer = selectedSHGF * area * selectedSC * selectedCLF;

    setEntries((prev) => {
      const updated = { ...prev, [direction]: heatTransfer };
      if (onResultChange) onResultChange(updated);
      return updated;
    });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Exterior Glass
      </h1>

      {/* Direction */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Direction:</label>
        <select
          name="direction"
          value={inputs.direction}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {directions.map((dir, i) => (
            <option key={i} value={dir}>
              {dir}
            </option>
          ))}
        </select>
      </div>

      {/* Dimensions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Length (ft):</label>
          <input
            type="number"
            name="length"
            value={inputs.length}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Height (ft):</label>
          <input
            type="number"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>
      </div>

      {/* SHGF */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">SHGF Latitude:</label>
        <select
          name="shgf"
          value={inputs.shgf}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {Object.keys(shgfValues).map((lat) => (
            <option key={lat} value={lat}>
              {lat}
            </option>
          ))}
        </select>
      </div>

      {/* SC */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Shading Coefficient:</label>
        <select
          name="sc"
          value={inputs.sc}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {Object.keys(shadingCoefficients).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* CLF */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Cooling Load Factor (CLF):</label>
        <select
          name="clf"
          value={inputs.clf}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {Object.keys(clfValues).map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={addEntry}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Direction Heat Transfer
        </button>
      </div>

      {/* Results */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Results</h2>
        {Object.keys(entries).length > 0 ? (
          <ul className="list-disc ml-6">
            {Object.entries(entries).map(([dir, val]) => (
              <li key={dir}>
                {dir}: <strong>{val.toFixed(2)} BTU/hr</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">
            Enter values and click "Add Direction Heat Transfer".
          </p>
        )}
      </div>
    </div>
  );
};

export default HeatTransferCalculator2;
