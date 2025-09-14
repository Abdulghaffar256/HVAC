"use client";

import { useState } from "react";

// ✅ Import calculators
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page";

export default function LoadCalculatorPage() {
  const [results, setResults] = useState({});
  const [resetKey, setResetKey] = useState(0);

  // 🔹 Collect results safely
  const handleCalculate = (name, value) => {
    setResults((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Reset all calculators
  const resetAll = () => {
    setResults({});
    setResetKey((k) => k + 1); // forces children to reset
  };

  // 🔹 Compute total heat dynamically
  const totalHeat = Object.values(results).reduce((acc, v) => acc + v, 0);

  // 🔹 Download report as text file
  const downloadReport = () => {
    const content = `HVAC Load Report\n\nResults:\n${Object.entries(results)
      .map(([key, val]) => `${key}: ${val.toFixed(2)} Btu/h`)
      .join("\n")}\n\nTotal Load: ${totalHeat.toFixed(2)} Btu/h`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "HVAC_Load_Report.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
        HVAC Load Calculators
      </h1>

      {/* ✅ Action Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={resetAll}
          className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300"
        >
          Recalculate
        </button>
        <button
          onClick={downloadReport}
          className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-300"
        >
          Download Report
        </button>
      </div>

      {/* ✅ Sections with child calculators */}
      <div className="space-y-10">
        <HeatTransferCalculator1
          onCalculate={(val) => handleCalculate("wall", val)}
          updateKey={resetKey}
        />
        <HeatTransferCalculator2
          onCalculate={(val) => handleCalculate("glass", val)}
          updateKey={resetKey}
        />
        <HeatTransferThroughRoof3
          onCalculate={(val) => handleCalculate("roof", val)}
          updateKey={resetKey}
        />
        <HeatTransferCalculator7
          onCalculate={(val) => handleCalculate("intwall", val)}
          updateKey={resetKey}
        />
        <HeatGeneratedByLighting4
          onCalculate={(val) => handleCalculate("lighting", val)}
          updateKey={resetKey}
        />
        <HeatCalculator5
          onCalculate={(val) => handleCalculate("people", val)}
          updateKey={resetKey}
        />
        <HeatDissipationCalculator6
          onCalculate={(val) => handleCalculate("equipment", val)}
          updateKey={resetKey}
        />
      </div>

    
    </div>
  );
}
