"use client";
import { useState } from "react";

export default function CfmCalculatorPage() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [ach, setAch] = useState("");
  const [cfm, setCfm] = useState(null);

  const calculateCFM = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const airChanges = parseFloat(ach);

    if (isNaN(l) || isNaN(w) || isNaN(h) || isNaN(airChanges) || l <= 0 || w <= 0 || h <= 0 || airChanges <= 0) {
      setCfm("Please enter valid positive numbers.");
      return;
    }

    const volume = l * w * h; // cubic feet
    const result = (volume * airChanges) / 60;
    setCfm(result.toFixed(2));
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        CFM Calculator
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Calculate the required air flow rate based on room size and air changes per hour.
      </p>

      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length (ft)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g., 20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width (ft)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g., 15"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height (ft)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g., 10"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Air Changes per Hour (ACH)</label>
          <input
            type="number"
            value={ach}
            onChange={(e) => setAch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="e.g., 6"
          />
        </div>

        <button
          onClick={calculateCFM}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          Calculate CFM
        </button>

        {cfm !== null && (
          <div className="mt-6 text-center">
            {typeof cfm === "string" ? (
              <p className="text-red-500 font-medium">{cfm}</p>
            ) : (
              <p className="text-lg font-semibold text-green-700">
                Required CFM: <span className="text-blue-600">{cfm}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

