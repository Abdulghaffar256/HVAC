"use client";

import { useState } from "react";

// ✅ Import your existing calculators
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page";

export default function SimpleLoadCalculator() {
  const [values, setValues] = useState({
    walls: 0,
    roof: 0,
    glass: 0,
    lighting: 0,
    people: 0,
    equipment: 0,
  });

  // ✅ Callback to update values from child calculators
  const updateHeatValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: Number(value) || 0 }));
  };

  const totalHeatLoad = Object.values(values).reduce((sum, v) => sum + v, 0);
  const tons = (totalHeatLoad / 12000).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Simple HVAC Load Calculator
      </h1>

      {/* Your calculators */}
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold mb-2">Exterior Wall</h2>
          <HeatTransferCalculator1 onCalculate={(val) => updateHeatValue("walls", val)} />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Roof</h2>
          <HeatTransferThroughRoof3 onCalculate={(val) => updateHeatValue("roof", val)} />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Glass</h2>
          <HeatTransferCalculator2 onCalculate={(val) => updateHeatValue("glass", val)} />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Interior Wall</h2>
          <HeatTransferCalculator7 onCalculate={(val) => updateHeatValue("walls", val)} />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Lighting</h2>
          <HeatGeneratedByLighting4 onCalculate={(val) => updateHeatValue("lighting", val)} />
        </div>

        <div>
          <h2 className="font-semibold mb-2">People</h2>
          <HeatCalculator5 onCalculate={(val) => updateHeatValue("people", val)} />
        </div>

        <div>
          <h2 className="font-semibold mb-2">Electrical Equipment</h2>
          <HeatDissipationCalculator6 onCalculate={(val) => updateHeatValue("equipment", val)} />
        </div>
      </div>

      {/* Results */}
      <div className="mt-10 p-6 bg-blue-50 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-800">Total Heat Load</h2>
        <p className="text-2xl font-bold text-blue-700 mt-2">
          {totalHeatLoad.toFixed(2)} BTU/h
        </p>
        <p className="text-lg mt-1">
          Equivalent to <span className="font-bold">{tons}</span> Tons of Refrigeration
        </p>
      </div>
    </div>
  );
}
