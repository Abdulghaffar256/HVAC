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
  // ✅ Keep track of partial results
  const [results, setResults] = useState({
    exWall: 0,
    glass: 0,
    roof: 0,
    intWall: 0,
    lighting: 0,
    people: 0,
    electrical: 0,
  });

  // ✅ Update handler for each calculator
  const handleResultChange = (key, value) => {
    setResults((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Compute total
  const totalLoad = Object.values(results).reduce((a, b) => a + b, 0);

  // ✅ Convert to refrigeration tons (1 TR = 12000 BTU/hr ≈ 3.517 kW)
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

  // ✅ Custom Result Message
  const getResultMessage = () => {
    if (tons < 1) return "Small space – a single split AC may be enough.";
    if (tons < 5) return "Medium load – multiple units or packaged AC recommended.";
    return "Large load – consider central HVAC system.";
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        HVAC Load Calculators
      </h1>

      {/* ✅ Summary Card */}
      <div className="p-6 mb-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-2">Total Cooling Load</h2>
        <p className="text-lg">🔹 {totalLoad.toFixed(2)} kW</p>
        <p className="text-lg">❄️ {tons.toFixed(2)} Tons of Refrigeration</p>
      </div>

      {/* ✅ 2-column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ External Wall */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            External Wall Heat Transfer
          </h2>
          <HeatTransferCalculator1
            onResult={(val) => handleResultChange("exWall", val)}
          />
        </div>

        {/* ✅ Glass */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Glass Heat Transfer
          </h2>
          <HeatTransferCalculator2
            onResult={(val) => handleResultChange("glass", val)}
          />
        </div>

        {/* ✅ Roof */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Roof Heat Transfer
          </h2>
          <HeatTransferThroughRoof3
            onResult={(val) => handleResultChange("roof", val)}
          />
        </div>

        {/* ✅ Internal Wall */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Internal Wall Heat Transfer
          </h2>
          <HeatTransferCalculator7
            onResult={(val) => handleResultChange("intWall", val)}
          />
        </div>

        {/* ✅ Lighting */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Lighting Heat Generation
          </h2>
          <HeatGeneratedByLighting4
            onResult={(val) => handleResultChange("lighting", val)}
          />
        </div>

        {/* ✅ People */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            People Heat Gain
          </h2>
          <HeatCalculator5
            onResult={(val) => handleResultChange("people", val)}
          />
        </div>

        {/* ✅ Electrical Equipment (full row) */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50 md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Electrical Equipment Heat Dissipation
          </h2>
          <HeatDissipationCalculator6
            onResult={(val) => handleResultChange("electrical", val)}
          />
        </div>
      </div>

    
     {/* ✅ Detailed Breakdown Section */}
<div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Detailed Breakdown
  </h2>

  {/* Table format for clarity */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-700">
          <th className="p-3 text-left font-semibold">Component</th>
          <th className="p-3 text-right font-semibold">Load (kW)</th>
          <th className="p-3 text-right font-semibold">Load (TR)</th>
        </tr>
      </thead>
      <tbody>
        {breakdown.map((item) => (
          <tr
            key={item.key}
            className="border-b hover:bg-blue-50 transition"
          >
            <td className="p-3 font-medium">{item.label}</td>
            <td className="p-3 text-right">
              {results[item.key].toFixed(2)}
            </td>
            <td className="p-3 text-right">
              {(results[item.key] / 3.517).toFixed(2)}
            </td>
          </tr>
        ))}

        {/* ✅ Final Total Row */}
        <tr className="bg-green-100 font-bold border-t-2 border-green-500">
          <td className="p-3">TOTAL</td>
          <td className="p-3 text-right">{totalLoad.toFixed(2)}</td>
          <td className="p-3 text-right">{tons.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* ✅ Recommendation Card */}
  <div className="mt-6 bg-green-100 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
    <h3 className="text-xl font-semibold text-green-700">Result</h3>
    <p className="text-lg font-medium text-gray-700">
      {getResultMessage()}
    </p>
  </div>
</div>

    </div>
  );
}
