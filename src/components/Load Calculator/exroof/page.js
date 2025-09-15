"use client";

import React, { useState, useEffect } from "react";

const roofMaterials = [
  { label: "Steel Sheet with 1-in. Insulation", uValue: 0.213 },
  { label: "1-in. Wood with 1-in. Insulation", uValue: 0.170 },
  { label: "4-in. Lightweight Concrete", uValue: 0.213 },
  { label: "2-in. Heavyweight Concrete with 1-in. Insulation", uValue: 0.206 },
  { label: "1-in. Wood with 2-in. Insulation", uValue: 0.109 },
  { label: "6-in. Lightweight Concrete", uValue: 0.158 },
  { label: "2.5-in. Wood with 1-in. Insulation", uValue: 0.130 },
  { label: "8-in. Lightweight Concrete", uValue: 0.126 },
  { label: "4-in. Heavyweight Concrete with 1-in. Insulation", uValue: 0.200 },
  { label: "2.5-in. Wood with 2-in. Insulation", uValue: 0.093 },
  { label: "Roof Terrace System", uValue: 0.106 },
  { label: "6-in. Heavyweight Concrete with 1-in. Insulation", uValue: 0.192 },
  { label: "4-in. Wood with 1-in. Insulation", uValue: 0.106 },
  { label: "Other", uValue: null },
];

const HeatTransferThroughRoof3 = ({ onResultChange, updateKey }) => {
  const [inputs, setInputs] = useState({
    length: 0,
    width: 0,
    tempDifference: 0,
    uValue: 0,
  });

  const [isCustomUValue, setIsCustomUValue] = useState(false);
  const [result, setResult] = useState(null);

  // 🔹 Reset when parent triggers updateKey
  useEffect(() => {
    setInputs({ length: 0, width: 0, tempDifference: 0, uValue: 0 });
    setIsCustomUValue(false);
    setResult(null);
    if (onResultChange) onResultChange(0); // notify parent reset
  }, [updateKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleMaterialChange = (e) => {
    const selectedMaterial = roofMaterials.find(
      (mat) => mat.label === e.target.value
    );
    if (selectedMaterial?.label === "Other") {
      setIsCustomUValue(true);
      setInputs((prev) => ({ ...prev, uValue: 0 }));
    } else {
      setIsCustomUValue(false);
      setInputs((prev) => ({ ...prev, uValue: selectedMaterial?.uValue || 0 }));
    }
  };

  const calculateHeatTransfer = () => {
    const { length, width, tempDifference, uValue } = inputs;

    if (length <= 0 || width <= 0 || tempDifference <= 0 || uValue <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const area = length * width;
    const heatTransfer = uValue * area * tempDifference;
    setResult(heatTransfer);

    if (onResultChange) {
      onResultChange(heatTransfer);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Roof
      </h1>

      {/* Material Selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Roof Material:</label>
        <select
          onChange={handleMaterialChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Material --</option>
          {roofMaterials.map((material, index) => (
            <option key={index} value={material.label}>
              {material.label}{" "}
              {material.uValue !== null && `(U-Value: ${material.uValue})`}
            </option>
          ))}
        </select>
      </div>

      {/* Custom U-Value */}
      {isCustomUValue && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Enter Custom U-Value:</label>
          <input
            type="number"
            name="uValue"
            value={inputs.uValue}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter U-Value"
            min="0"
            step="0.01"
          />
        </div>
      )}

      {/* Dimensions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Length of Roof (ft):</label>
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
          <label className="block mb-1 font-medium">Width of Roof (ft):</label>
          <input
            type="number"
            name="width"
            value={inputs.width}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>
      </div>

      {/* Temperature */}
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
          min="0"
        />
      </div>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={calculateHeatTransfer}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
        >
          Calculate Heat Transfer
        </button>
      </div>

      {/* Result */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Result</h2>
        {result !== null ? (
          <p className="text-lg">
            Heat Transfer (Q): <strong>{result.toFixed(2)} BTU/hr</strong>
          </p>
        ) : (
          <p className="text-gray-600">Enter values to calculate heat transfer.</p>
        )}
      </div>
    </div>
  );
};

export default HeatTransferThroughRoof3;
