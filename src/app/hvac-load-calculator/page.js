"use client";
import { useState } from "react";

import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page";

export default function LoadCalculatorPage() {
  const [resetKey, setResetKey] = useState(0);

  // ✅ Results state
  const [results, setResults] = useState({
    exwall: {}, // per-direction
    exglass: {}, // per-direction
    roof: {}, // now per-direction
    intwall: 0,
    light: 0,
    people: 0,
    ele: 0,
  });

  // ✅ Update results
  const handleResultChange = (key, value, subKey = null) => {
    setResults((prev) => {
      if (subKey) {
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [subKey]: value,
          },
        };
      }
      return { ...prev, [key]: value };
    });
  };

  // ✅ Flatten nested objects for total
  const totalLoad = Object.values(results).reduce((sum, val) => {
    if (typeof val === "object" && val !== null) {
      return sum + Object.values(val).reduce((a, b) => a + b, 0);
    }
    return sum + val;
  }, 0);

  // ✅ Reset
  const handleRecalculate = () => {
    setResetKey((prev) => prev + 1);
    setResults({
      exwall: {},
      exglass: {},
      roof: {},
      intwall: 0,
      light: 0,
      people: 0,
      ele: 0,
    });
  };

  // ✅ Download
  const handleDownload = () => {
    let content = `HVAC Load Calculation Report\n`;

    // Exterior walls
    content += `\n- Exterior Walls:\n`;
    if (Object.keys(results.exwall).length > 0) {
      for (const [dir, val] of Object.entries(results.exwall)) {
        content += `   • ${dir}: ${val.toFixed(2)} BTU\n`;
      }
    } else {
      content += `   • 0 BTU\n`;
    }

    // Exterior glass
    content += `\n- Exterior Glass:\n`;
    if (Object.keys(results.exglass).length > 0) {
      for (const [dir, val] of Object.entries(results.exglass)) {
        content += `   • ${dir}: ${val.toFixed(2)} BTU\n`;
      }
    } else {
      content += `   • 0 BTU\n`;
    }

    // Roof
    content += `\n- Roof Heat Gain:\n`;
    if (Object.keys(results.roof).length > 0) {
      for (const [dir, val] of Object.entries(results.roof)) {
        content += `   • ${dir}: ${val.toFixed(2)} BTU\n`;
      }
    } else {
      content += `   • 0 BTU\n`;
    }

    // Others
    content += `
- Interior Walls: ${results.intwall} BTU
- Lighting Heat Gain: ${results.light} BTU
- People Heat Gain: ${results.people} BTU
- Electrical Equipment Heat Gain: ${results.ele} BTU

---------------------------------------
Total Load: ${totalLoad} BTU
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "HVAC_Load_Report.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
        HVAC Load Calculators
      </h1>

      {/* ✅ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HeatTransferCalculator1
          onResultChange={(v, dir) => handleResultChange("exwall", v, dir)}
          updateKey={resetKey}
        />
        <HeatTransferCalculator2
          onResultChange={(v, dir) => handleResultChange("exglass", v, dir)}
          updateKey={resetKey}
        />
        <HeatTransferThroughRoof3
          onResultChange={(v, dir) => handleResultChange("roof", v, dir)}
          updateKey={resetKey}
        />
        <HeatTransferCalculator7
          onResultChange={(v) => handleResultChange("intwall", v)}
          updateKey={resetKey}
        />
        <HeatGeneratedByLighting4
          onResultChange={(v) => handleResultChange("light", v)}
          updateKey={resetKey}
        />
        <HeatCalculator5
          onResultChange={(v) => handleResultChange("people", v)}
          updateKey={resetKey}
        />
        <HeatDissipationCalculator6
          onResultChange={(v) => handleResultChange("ele", v)}
          updateKey={resetKey}
        />
      </div>

      {/* ✅ Breakdown */}
      <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Load Breakdown
        </h2>
        <ul className="space-y-2 text-gray-800 text-lg">
          {/* Exterior Walls */}
          <li>
            <span className="font-semibold">Exterior Walls:</span>
            <ul className="ml-6 list-disc">
              {Object.entries(results.exwall).map(([dir, val]) => (
                <li key={dir}>
                  {dir}:{" "}
                  <span className="font-semibold">
                    {val.toLocaleString()} BTU
                  </span>
                </li>
              ))}
            </ul>
          </li>

          {/* Exterior Glass */}
          <li>
            <span className="font-semibold">Exterior Glass:</span>
            <ul className="ml-6 list-disc">
              {Object.entries(results.exglass).map(([dir, val]) => (
                <li key={dir}>
                  {dir}:{" "}
                  <span className="font-semibold">
                    {val.toLocaleString()} BTU
                  </span>
                </li>
              ))}
            </ul>
          </li>

          {/* Roof */}
          <li>
            <span className="font-semibold">Roof Heat Gain:</span>
            <ul className="ml-6 list-disc">
              {Object.entries(results.roof).map(([dir, val]) => (
                <li key={dir}>
                  {dir}:{" "}
                  <span className="font-semibold">
                    {val.toLocaleString()} BTU
                  </span>
                </li>
              ))}
            </ul>
          </li>

          <li>
            Interior Walls:{" "}
            <span className="font-semibold">
              {results.intwall.toLocaleString()} BTU
            </span>
          </li>
          <li>
            Lighting Heat Gain:{" "}
            <span className="font-semibold">
              {results.light.toLocaleString()} BTU
            </span>
          </li>
          <li>
            People Heat Gain:{" "}
            <span className="font-semibold">
              {results.people.toLocaleString()} BTU
            </span>
          </li>
          <li>
            Electrical Equipment Heat Gain:{" "}
            <span className="font-semibold">
              {results.ele.toLocaleString()} BTU
            </span>
          </li>
        </ul>
      </div>

      {/* ✅ Total */}
      <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center text-xl font-semibold text-blue-700 shadow">
        Total Load: {totalLoad.toLocaleString()} BTU
      </div>

      {/* ✅ Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handleRecalculate}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow"
        >
          Recalculate
        </button>
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow"
        >
          Download Report
        </button>
      </div>
    </div>
  );
}
