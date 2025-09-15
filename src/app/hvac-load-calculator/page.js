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

  // ✅ State to store results from all calculators
  const [results, setResults] = useState({
    exwall: 0,
    exglass: 0,
    exroof: 0,
    intwall: 0,
    lighting: 0,
    people: 0,
    ele: 0,
  });

  // ✅ Update a calculator's result
  const handleResultChange = (key, value) => {
    setResults((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Calculate total
  const totalLoad = Object.values(results).reduce((a, b) => a + b, 0);

  // ✅ Handle Recalculate (re-render calculators + reset results)
  const handleRecalculate = () => {
    setResetKey((prev) => prev + 1);
    setResults({
      exwall: 0,
      exglass: 0,
      exroof: 0,
      intwall: 0,
      lighting: 0,
      people: 0,
      ele: 0,
    });
  };

  // ✅ Handle Download
  const handleDownload = () => {
    const content = `HVAC Load Calculation Report\n
- Exterior Walls: ${results.exwall} BTU\n
- Glass Heat Transfer: ${results.exglass} BTU\n
- Roof Heat Transfer: ${results.exroof} BTU\n
- Interior Walls: ${results.intwall} BTU\n
- Lighting Heat Gain: ${results.lighting} BTU\n
- People Heat Gain: ${results.people} BTU\n
- Electrical Equipment Heat Gain: ${results.ele} BTU\n
---------------------------------------\n
Total Load: ${totalLoad} BTU\n`;

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

      {/* ✅ Action Buttons */}
      <div className="flex justify-center gap-4 mb-8">
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

      {/* ✅ Grid Layout with 2 columns */}
      <div key={resetKey} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HeatTransferCalculator1 onResultChange={(v) => handleResultChange("exwall", v)} />
        <HeatTransferCalculator2 onResultChange={(v) => handleResultChange("exglass", v)} />
        <HeatTransferThroughRoof3 onResultChange={(v) => handleResultChange("exroof", v)} />
        <HeatTransferCalculator7 onResultChange={(v) => handleResultChange("intwall", v)} />
        <HeatGeneratedByLighting4 onResultChange={(v) => handleResultChange("lighting", v)} />
        <HeatCalculator5 onResultChange={(v) => handleResultChange("people", v)} />
        <HeatDissipationCalculator6 onResultChange={(v) => handleResultChange("ele", v)} />
      </div>

      {/* ✅ Total Result Bar */}
      <div className="mt-10 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center text-xl font-semibold text-blue-700 shadow">
        Total Load: {totalLoad.toLocaleString()} BTU
      </div>
    </div>
  );
}
