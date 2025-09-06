"use client";

import React, { useState } from "react";
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import LightingHeatCalculator4 from "@/components/Load Calculator/lighting/page";
import OccupantHeatGainCalculator5 from "@/components/Load Calculator/occupants/page";

export default function CombinedHeatCalculators() {
  const [results, setResults] = useState({});
  const [updateKey, setUpdateKey] = useState(0);

  const calculators = [
    { id: "exwall", label: "Exterior Wall", Component: HeatTransferCalculator1 },
    { id: "exglass", label: "Glass", Component: HeatTransferCalculator2 },
    { id: "exroof", label: "Roof", Component: HeatTransferThroughRoof3 },
    { id: "intwall", label: "Interior Wall", Component: HeatTransferCalculator7 },
    { id: "lighting", label: "Lighting", Component: LightingHeatCalculator4 },
    { id: "occupants", label: "Occupants", Component: OccupantHeatGainCalculator5 },
    { id: "electrical", label: "Electrical Equipment", Component: HeatDissipationCalculator6 },
  ];

  // Update result for each calculator
  const updateHeatValue = (id, heat) => {
    setResults((prev) => ({ ...prev, [id]: heat }));
  };

  // Sum of all calculators
  const totalHeat = Object.values(results).reduce((sum, val) => sum + (val || 0), 0);

  // Reset all children by bumping updateKey
  const resetAll = () => {
    setResults({});
    setUpdateKey((prev) => prev + 1);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">HVAC Load Calculator</h1>

      {/* Render each calculator */}
      <div className="space-y-8">
        {calculators.map(({ id, label, Component }) => (
          <div key={id} className="border p-4 rounded-lg shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-3">{label}</h2>
            <Component
              onCalculate={(heat) => updateHeatValue(id, heat)}
              updateKey={updateKey} // ✅ pass updateKey instead of using key
            />
          </div>
        ))}
      </div>

      {/* Show total */}
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h2 className="text-2xl font-bold">Total Heat Load: {totalHeat.toFixed(2)} kW</h2>
      </div>

      {/* Reset button */}
      <button
        onClick={resetAll}
        className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow"
      >
        Reset All
      </button>
    </div>
  );
}
