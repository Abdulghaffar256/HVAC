"use client";
import React, { useState, useEffect } from "react";

// Material options
const materials = [
  { label: "4-in. Face Brick + Air Space + 4-in. Common Brick", uValue: 0.358 },
  { label: "4-in. Face Brick + 2-in. Insulation + 4-in. Common Brick", uValue: 0.111 },
  { label: "4-in. Concrete + Air Space", uValue: 0.350 },
  { label: "4-in. Concrete + 2-in. Insulation", uValue: 0.116 },
  { label: "8-in. Block + Insulation", uValue: 0.107 },
  { label: "12-in. Concrete + Insulation", uValue: 0.113 },
  { label: "Metal Curtain Wall with Insulation", uValue: 0.230 },
  { label: "Frame Wall with Insulation", uValue: 0.178 },
];

// Directions
const directions = ["North", "South", "East", "West", "Horizontal"];

const HeatTransferCalculator1 = ({ onResultChange, updateKey }) => {
  const [entries, setEntries] = useState({});
  const [inputs, setInputs] = useState({
    direction: "South",
    length: 0,
    height: 0,
    tempDifference: 0,
    uValue: 0,
    material: "",
  });

  // Reset when parent triggers updateKey
  useEffect(() => {
    setEntries({});
    setInputs({
      direction: "South",
      length: 0,
      height: 0,
      tempDifference: 0,
      uValue: 0,
      material: "",
    });
    if (onResultChange) onResultChange({});
  }, [updateKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]:
        name === "length" || name === "height" || name === "tempDifference"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const handleMaterialChange = (e) => {
    const selectedMaterial = materials.find((m) => m.label === e.target.value);
    setInputs((prev) => ({
      ...prev,
      material: e.target.value,
      uValue: selectedMaterial?.uValue || 0,
    }));
  };

  const addEntry = () => {
    const { direction, length, height, tempDifference, uValue } = inputs;

    if (length <= 0 || height <= 0 || tempDifference <= 0 || uValue <= 0) {
      alert("Please enter valid inputs (material, size, and temperature).");
      return;
    }

    const area = length * height;
    const heatTransfer = uValue * area * tempDifference;

    setEntries((prev) => {
      const updated = { ...prev, [direction]: heatTransfer };
      if (onResultChange) onResultChange(updated);
      return updated;
    });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Exterior Walls
      </h1>

      {/* Material Selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Material:</label>
        <select
          value={inputs.material}
          onChange={handleMaterialChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Material --</option>
          {materials.map((mat, i) => (
            <option key={i} value={mat.label}>
              {mat.label} (U = {mat.uValue})
            </option>
          ))}
        </select>
      </div>

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

      {/* Temperature Difference */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Temperature Difference (°F):</label>
        <input
          type="number"
          name="tempDifference"
          value={inputs.tempDifference}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          min="0"
        />
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

export default HeatTransferCalculator1;
