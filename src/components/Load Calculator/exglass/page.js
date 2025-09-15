"use client";

import React, { useState, useEffect } from "react";

const HeatTransferCalculator2 = ({ onResultChange, updateKey }) => {
  const [inputs, setInputs] = useState({
    length: 0,
    height: 0,
    shgf: "20° N",
    sc: "Clear Glass Without Shading",
    clf: "N",
  });

  const [result, setResult] = useState(null);

  // 🔹 Reset when parent triggers updateKey
  useEffect(() => {
    setInputs({
      length: 0,
      height: 0,
      shgf: "20° N",
      sc: "Clear Glass Without Shading",
      clf: "N",
    });
    setResult(null);
    if (onResultChange) onResultChange(0); // reset parent result too
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]:
        name === "length" || name === "height"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const calculateHeatTransfer = () => {
    const { length, height, shgf, sc, clf } = inputs;

    if (length <= 0 || height <= 0) {
      alert("Please enter valid dimensions for glass.");
      return;
    }

    const area = length * height;
    const selectedSHGF = shgfValues[shgf];
    const selectedSC = shadingCoefficients[sc];
    const selectedCLF = clfValues[clf];

    const heatTransfer = selectedSHGF * area * selectedSC * selectedCLF;
    setResult(heatTransfer);

    if (onResultChange) {
      onResultChange(heatTransfer);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Transfer Through Exterior Glass
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">
            Length of Glass (ft):
          </label>
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
          <label className="block mb-1 font-medium">
            Height of Glass (ft):
          </label>
          <input
            type="number"
            name="height"
            value={inputs.height}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>

        <div>
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

        <div>
          <label className="block mb-1 font-medium">Shading Coefficient:</label>
          <select
            name="sc"
            value={inputs.sc}
            onChange={handleChange}
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
          <label className="block mb-1 font-medium">
            Cooling Load Factor (CLF):
          </label>
          <select
            name="clf"
            value={inputs.clf}
            onChange={handleChange}
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

      <button
        onClick={calculateHeatTransfer}
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
      >
        Calculate Heat Transfer
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Result</h2>
        {result !== null ? (
          <p className="text-lg">
            Heat Transfer (Q):{" "}
            <strong>{result.toFixed(2)} BTU/hr</strong>
          </p>
        ) : (
          <p className="text-gray-600">
            Enter values to calculate heat transfer.
          </p>
        )}
      </div>
    </div>
  );
};

export default HeatTransferCalculator2;
