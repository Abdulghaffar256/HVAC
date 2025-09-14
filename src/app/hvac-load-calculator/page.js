"use client";

import { useState } from "react";

// ✅ Imports for calculators
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page";

export default function LoadCalculatorPage() {
  const [results, setResults] = useState({
    exWall: 0,
    glass: 0,
    roof: 0,
    intWall: 0,
    lighting: 0,
    people: 0,
    electrical: 0,
  });

  // ✅ React way: update directly from children
  const updateResult = (key, value) => {
    setResults((prev) => ({ ...prev, [key]: Math.max(0, Number(value)) }));
  };

  const totalLoad = Object.values(results).reduce((a, b) => a + b, 0);
  const tons = totalLoad / 3.517;

  const breakdown = [
    { label: "External Wall", key: "exWall" },
    { label: "Glass", key: "glass" },
    { label: "Roof", key: "roof" },
    { label: "Internal Wall", key: "intWall" },
    { label: "Lighting", key: "lighting" },
    { label: "People", key: "people" },
    { label: "Electrical Equipment", key: "electrical" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        HVAC Load Calculators
      </h1>

      {/* ✅ 2-column responsive grid with calculators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HeatTransferCalculator1 onCalculate={(v) => updateResult("exWall", v)} />
        <HeatTransferCalculator2 onCalculate={(v) => updateResult("glass", v)} />
        <HeatTransferThroughRoof3 onCalculate={(v) => updateResult("roof", v)} />
        <HeatTransferCalculator7 onCalculate={(v) => updateResult("intWall", v)} />
        <HeatGeneratedByLighting4 onCalculate={(v) => updateResult("lighting", v)} />
        <HeatCalculator5 onCalculate={(v) => updateResult("people", v)} />
        <div className="md:col-span-2">
          <HeatDissipationCalculator6 onCalculate={(v) => updateResult("electrical", v)} />
        </div>
      </div>

      {/* ✅ Results Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
        <ul className="mt-2 text-gray-700 space-y-2">
          {breakdown.map(({ label, key }) => (
            <li key={key} className="transition-all hover:text-blue-600">
              <span className="font-medium">{label}:</span>{" "}
              {results[key].toFixed(2)} kW
            </li>
          ))}
        </ul>

        {/* ✅ Simple Total */}
        <div className="mt-6 text-center text-2xl font-bold text-blue-700">
          Total: {totalLoad.toFixed(2)} kW ({tons.toFixed(2)} Tons)
        </div>
      </div>
    </div>
  );
}
