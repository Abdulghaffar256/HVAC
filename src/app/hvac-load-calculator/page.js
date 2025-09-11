"use client";

import { useState } from "react";
// ✅ Added imports
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page"; // ✅ New Import

export default function SimpleLoadCalculator() {
  const [values, setValues] = useState({
    walls: 0,
    roof: 0,
    glass: 0,
    lighting: 0,
    people: 0,
    equipment: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: Number(value) || 0 }));
  };

  const totalHeatLoad = Object.values(values).reduce((sum, v) => sum + v, 0);
  const tons = (totalHeatLoad / 12000).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Simple HVAC Load Calculator
      </h1>

      {/* Input fields */}
      <div className="space-y-4">
        {Object.keys(values).map((key) => (
          <div key={key} className="flex justify-between items-center">
            <label className="capitalize font-medium">{key}</label>
            <input
              type="number"
              name={key}
              value={values[key]}
              onChange={handleChange}
              className="border px-3 py-1 rounded w-40"
              placeholder="BTU/h"
            />
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
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
