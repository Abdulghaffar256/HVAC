"use client";

import React, { useState, useEffect } from "react";

// Material options with U-values
const materials = [
  { label: "4-in. Concrete + Air Space", uValue: 0.350 },
  { label: "4-in. Concrete + 2-in. Insulation", uValue: 0.116 },
  { label: "12-in. Concrete + Insulation", uValue: 0.113 },
  { label: "Metal Curtain Wall with Insulation", uValue: 0.230 },
  { label: "Frame Wall with Insulation", uValue: 0.178 },
];

const HeatTransferCalculator = ({ onCalculate, updateKey }) => {
  const [inputs, setInputs] = useState({
    length: "",
    height: "",
    tempDifference: "",
    uValue: 0,
  });

  const [heatTransfer, setHeatTransfer] = useState(null);

  // 🔹 Reset when parent changes updateKey
  useEffect(() => {
    setInputs({
      length: "",
      height: "",
      tempDifference: "",
      uValue: 0,
    });
    setHeatTransfer(null);
    if (typeof onCalculate === "function") onCalculate(0); // reset parent too
  }, [updateKey]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value === "" ? "" : Math.max(0, parseFloat(value) || 0),
    }));
  };

  // Handle material selection
  const handleMaterialChange = (e) => {
    const selectedMaterial = materials.find((mat) => mat.label === e.target.value);
    setInputs((prev) => ({
      ...prev,
      uValue: selectedMaterial?.uValue || 0,
    }));
  };

  // Manual calculation
  const calculateHeatTransfer = () => {
    const { length, height, tempDifference, uValue } = inputs;

    if (length && height && tempDifference && uValue) {
      const area = length * height;
      const calculatedHeat = uValue * area * tempDifference;
      setHeatTransfer(calculatedHeat);

      if (typeof onCalculate === "function") {
        onCalculate(calculatedHeat); // 🔥 send only number (consistent with others)
      }
    } else {
      setHeatTransfer(null);
      if (typeof onCalculate === "function") onCalculate(0);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Partition Wall
      </h1>

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
            min="0"
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

      <button
        onClick={calculateHeatTransfer}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Calculate Heat Transfer
      </button>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Result:</h2>
        {heatTransfer !== null ? (
          <p className="text-xl font-bold text-blue-600">
            {heatTransfer.toFixed(2)} BTU/hr
          </p>
        ) : (
          <p className="text-gray-600">Enter values and calculate heat transfer.</p>
        )}
      </div>
    </div>
  );
};

export default HeatTransferCalculator;
