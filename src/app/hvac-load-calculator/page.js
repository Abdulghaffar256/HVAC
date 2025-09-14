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

  // 🔹 Collect results from children
  const handleCalculate = (name, value) => {
    setResults((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Compute total heat dynamically
  const totalHeat = Object.values(results).reduce((acc, v) => acc + v, 0);

  return (
    <div className="max-w-5xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
        HVAC Load Calculators
      </h1>

      {/* ✅ Sections with child calculators */}
      <div className="space-y-10">
        <HeatTransferCalculator1
          onCalculate={(val) => handleCalculate("wall", val)}
        />
        <HeatTransferCalculator2
          onCalculate={(val) => handleCalculate("glass", val)}
        />
        <HeatTransferThroughRoof3
          onCalculate={(val) => handleCalculate("roof", val)}
        />
        <HeatTransferCalculator7
          onCalculate={(val) => handleCalculate("intwall", val)}
        />
        <HeatGeneratedByLighting4
          onCalculate={(val) => handleCalculate("lighting", val)}
        />
        <HeatCalculator5
          onCalculate={(val) => handleCalculate("people", val)}
        />
        <HeatDissipationCalculator6
          onCalculate={(val) => handleCalculate("equipment", val)}
        />
      </div>

      {/* ✅ Total Result */}
      <div className="mt-10 p-4 bg-blue-100 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Total Heat Load: {totalHeat.toFixed(2)} Btu/h
        </h2>
      </div>
    </div>
  );
}
