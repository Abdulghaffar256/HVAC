"use client";
import { useState } from "react";

export default function CfmCalculatorPage() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [ach, setAch] = useState("");
  const [volume, setVolume] = useState("");
  const [achDirect, setAchDirect] = useState("");
  const [cfm, setCfm] = useState(null);

  const calculateFromDimensions = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const airChanges = parseFloat(ach);

    if (
      isNaN(l) || isNaN(w) || isNaN(h) || isNaN(airChanges) ||
      l <= 0 || w <= 0 || h <= 0 || airChanges <= 0
    ) {
      setCfm("Please enter valid positive numbers for dimensions.");
      return;
    }

    const vol = l * w * h;
    const result = (vol * airChanges) / 60;
    setCfm(result.toFixed(2));
  };

  const calculateFromVolume = () => {
    const v = parseFloat(volume);
    const airChanges = parseFloat(achDirect);

    if (isNaN(v) || isNaN(airChanges) || v <= 0 || airChanges <= 0) {
      setCfm("Please enter valid positive numbers for volume & ACH.");
      return;
    }

    const result = (v * airChanges) / 60;
    setCfm(result.toFixed(2));
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-800">
        CFM Calculator
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Calculate the required <strong>Cubic Feet per Minute</strong> using room dimensions or direct volume.
      </p>

      {/* Method 1: From Dimensions */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Method 1: From Room Dimensions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Length (ft)
            </label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none transition"
              placeholder="e.g., 20"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Width (ft)
            </label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none transition"
              placeholder="e.g., 15"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Height (ft)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none transition"
              placeholder="e.g., 10"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Air Changes per Hour (ACH)
          </label>
          <input
            type="number"
            value={ach}
            onChange={(e) => setAch(e.target.value)}
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none transition"
            placeholder="e.g., 6"
          />
        </div>

        <button
          onClick={calculateFromDimensions}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300"
        >
          Calculate CFM
        </button>
      </div>

      {/* Method 2: From Volume */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 mb-10">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Method 2: From Volume
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Volume (ft³)
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none transition"
              placeholder="e.g., 3000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Air Changes per Hour (ACH)
            </label>
            <input
              type="number"
              value={achDirect}
              onChange={(e) => setAchDirect(e.target.value)}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none transition"
              placeholder="e.g., 6"
            />
          </div>
        </div>

        <button
          onClick={calculateFromVolume}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition transform hover:scale-[1.02] focus:ring-4 focus:ring-green-300"
        >
          Calculate CFM
        </button>
      </div>

      {/* Result Area */}
      {cfm !== null && (
        <div className="mt-8 bg-white border border-blue-200 rounded-3xl shadow-lg p-8 text-center">
          {typeof cfm === "string" ? (
            <p className="text-red-500 font-medium">{cfm}</p>
          ) : (
            <>
              <p className="text-xl font-bold text-gray-700 mb-2">
                Required CFM:
              </p>
              <p className="text-4xl font-extrabold text-blue-600 mb-4">
                {cfm} CFM
              </p>

              {/* Load Bar */}
              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden mb-3">
                <div
                  className="bg-blue-500 h-5 transition-all duration-500"
                  style={{
                    width: `${Math.min((cfm / 2000) * 100, 100)}%`,
                  }}
                ></div>
              </div>

              <p className="text-sm text-gray-500">
                Formula: (Volume × ACH) ÷ 60
              </p>
            </>
          )}
        </div>
      )}
    </main>
  );
}
