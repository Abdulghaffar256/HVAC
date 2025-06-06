"use client";

import React, { useState } from "react";

const HeatCalculatorLighting = ({ onCalculate }) => {
  const [wattage, setWattage] = useState("");
  const [heatGenerated, setHeatGenerated] = useState(0);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setWattage(value === "" ? "" : Math.max(0, parseFloat(value) || 0)); // Prevent negative values
  };

  // Manual calculation handler
  const calculateHeat = () => {
    if (wattage === "" || wattage <= 0) {
      setHeatGenerated(0);
      if (typeof onCalculate === "function") {
        onCalculate(0);
      }
      return;
    }

    const calculatedHeat = 3.4 * wattage * 0.8; // Q = 3.4 × WATT × 0.8
    setHeatGenerated(calculatedHeat);

    if (typeof onCalculate === "function") {
      onCalculate(calculatedHeat);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Heat Generated by Lighting
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Input Details</h2>

        {/* Wattage Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Lighting Wattage (W):</label>
          <input
            type="number"
            value={wattage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Wattage"
            min="0"
          />
        </div>

        {/* Calculate Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={calculateHeat}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Calculate Heat
          </button>
        </div>
      </div>

      {/* Result */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Result</h2>
        {heatGenerated > 0 ? (
          <p className="text-xl">
            Heat Generated: <strong>{heatGenerated.toFixed(2)} BTU/hr</strong>
          </p>
        ) : (
          <p className="text-gray-600">Enter a valid wattage and click the button to calculate heat.</p>
        )}
      </div>
    </div>
  );
};

export default HeatCalculatorLighting;


