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

// Direction options
const directions = ["North", "South", "East", "West", "Horizontal"];

const HeatTransferCalculator1 = ({ onResultChange, updateKey }) => {
  const [inputs, setInputs] = useState({
    length: 0,
    height: 0,
    tempDifference: 0,
    uValue: 0,
    direction: "",
  });

  // 🔹 Store multiple results (per direction)
  const [results, setResults] = useState({});

  // 🔹 Reset when parent changes updateKey
  useEffect(() => {
    setInputs({
      length: 0,
      height: 0,
      tempDifference: 0,
      uValue: 0,
      direction: "",
    });
    setResults({});
    if (onResultChange) onResultChange(0); // Reset parent total
  }, [updateKey]);

  // Input change handler
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

  // Material selection
  const handleMaterialChange = (e) => {
    const selectedMaterial = materials.find(
      (mat) => mat.label === e.target.value
    );
    setInputs((prev) => ({ ...prev, uValue: selectedMaterial?.uValue || 0 }));
  };

  // Manual calculation
  const calculateHeatTransfer = () => {
    const { length, height, tempDifference, uValue, direction } = inputs;
    if (
      length <= 0 ||
      height <= 0 ||
      tempDifference <= 0 ||
      uValue <= 0 ||
      !direction
    ) {
      alert("Please fill in all values correctly, including direction.");
      return;
    }

    const area = length * height;
    const heatTransfer = uValue * area * tempDifference;

    // Store result per direction
    setResults((prev) => {
      const updated = { ...prev, [direction]: heatTransfer };
      // Send total of all directions to parent
      if (onResultChange)
        onResultChange(Object.values(updated).reduce((a, b) => a + b, 0));
      return updated;
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Heat Transfer - Exterior Wall
      </h2>

      {/* Material Selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Material:</label>
        <select
          onChange={handleMaterialChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Material --</option>
          {materials.map((material, index) => (
            <option key={index} value={material.label}>
              {material.label} (U-Value: {material.uValue})
            </option>
          ))}
        </select>
      </div>

      {/* Direction Selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Wall Direction:</label>
        <select
          name="direction"
          value={inputs.direction}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Direction --</option>
          {directions.map((dir, index) => (
            <option key={index} value={dir}>
              {dir}
            </option>
          ))}
        </select>
      </div>

      {/* Wall Dimensions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Length of Wall (ft):</label>
          <input
            type="number"
            name="length"
            value={inputs.length}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Height of Wall (ft):</label>
          <input
            type="number"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Temperature Difference */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Temperature Difference (°F):
        </label>
        <input
          type="number"
          name="tempDifference"
          value={inputs.tempDifference}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Calculate Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={calculateHeatTransfer}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Heat Transfer
        </button>
      </div>

      {/* Results */}
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-lg font-semibold mb-2">Heat Transfer Results:</h3>
        {Object.keys(results).length > 0 ? (
          <ul className="space-y-1">
            {Object.entries(results).map(([dir, value]) => (
              <li key={dir} className="text-blue-600 font-medium">
                {dir}: {value.toFixed(2)} BTU/hr
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Enter values and calculate.</p>
        )}
      </div>
    </div>
  );
};

export default HeatTransferCalculator1;
