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

  // ✅ Handle Recalculate (re-render calculators)
  const handleRecalculate = () => {
    setResetKey((prev) => prev + 1);
  };

  // ✅ Handle Download (dummy text file for now)
  const handleDownload = () => {
    const content = `HVAC Load Calculation Report\n
- Exterior Walls: Calculated\n
- Glass Heat Transfer: Calculated\n
- Roof Heat Transfer: Calculated\n
- Interior Walls: Calculated\n
- Lighting Heat Gain: Calculated\n
- People Heat Gain: Calculated\n
- Electrical Equipment Heat Gain: Calculated\n`;

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
      <div
        key={resetKey}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <HeatTransferCalculator1 />
        <HeatTransferCalculator2 />
        <HeatTransferThroughRoof3 />
        <HeatTransferCalculator7 />
        <HeatGeneratedByLighting4 />
        <HeatCalculator5 />
        <HeatDissipationCalculator6 />
      </div>
    </div>
  );
}
