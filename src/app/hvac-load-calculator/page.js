'use client';

import React, { useState } from "react";
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page";

const calculators = [
  { id: "HeatTransferCalculator1", component: HeatTransferCalculator1, label: "Exterior Wall" },
  { id: "HeatTransferThroughRoof3", component: HeatTransferThroughRoof3, label: "Roof" },
  { id: "HeatTransferCalculator2", component: HeatTransferCalculator2, label: "Glass" },
  { id: "HeatTransferCalculator7", component: HeatTransferCalculator7, label: "Interior Wall" },
  { id: "HeatGeneratedByLighting4", component: HeatGeneratedByLighting4, label: "Lighting" },
  { id: "HeatCalculator5", component: HeatCalculator5, label: "People" },
  { id: "HeatDissipationCalculator6", component: HeatDissipationCalculator6, label: "Electrical Equipment" },
];

const CombinedHeatCalculators = () => {
  const [heatValues, setHeatValues] = useState(
    Object.fromEntries(calculators.map(({ id }) => [id, 0]))
  );

  const updateHeatValue = (key, value) => {
    setHeatValues((prev) => ({ ...prev, [key]: Math.max(0, Number(value)) }));
  };

  const totalCombinedHeat = Object.values(heatValues).reduce((acc, val) => acc + val, 0);
  const totalAmount = totalCombinedHeat.toFixed(2);

  const convertToTons = (btu) => (btu / 12000).toFixed(2);

  const getResultMessage = () => {
    if (totalCombinedHeat < 24000) return "Low heat load. No additional cooling required.";
    if (totalCombinedHeat <= 60000) return "Moderate heat load. Consider efficient HVAC.";
    return "High heat load! Upgraded HVAC system recommended.";
  };

  const resetValues = () => {
    setHeatValues(Object.fromEntries(calculators.map(({ id }) => [id, 0])));
  };

  const downloadReport = () => {
    // CSV header
    let csv = "Component,Heat Load (BTU/h)\n";

    // Component rows
    calculators.forEach(({ id, label }) => {
      csv += `${label},${parseFloat(heatValues[id]).toFixed(2)}\n`;
    });

    // Summary
    csv += `\nTotal Heat Load,${totalAmount}\n`;
    csv += `Tons of Refrigeration,${convertToTons(totalCombinedHeat)}\n`;
    csv += `Recommendation,${getResultMessage()}\n`;

    // Create file
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "HVAC_Load_Report.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700">HVAC Load Calculator</h1>
        <p className="text-lg text-gray-600 mt-2">Calculate total heat loads efficiently.</p>
      </div>

      {/* Total Heat Summary */}
      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center mb-8">
        <h2 className="text-3xl font-bold">Total Heat Load</h2>
        <p className="text-2xl mt-2 font-semibold">{totalAmount} BTU/h</p>
        <p className="text-xl mt-1">
          Equivalent to{" "}
          <span className="font-bold">{convertToTons(totalCombinedHeat)} Tons of Refrigeration</span>
        </p>
      </div>

      {/* Calculators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {calculators.map(({ id, component: Component, label }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{label}</h3>
            <Component onCalculate={(heat) => updateHeatValue(id, heat)} />
          </div>
        ))}
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Breakdown</h2>
        <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-2">
          {calculators.map(({ id, label }) => (
            <li key={id} className="transition-all hover:text-blue-500">
              <span className="font-medium">{label}:</span>{" "}
              {heatValues[id].toFixed(2)} BTU/h
            </li>
          ))}
        </ul>

        <div className="mt-4 bg-green-100 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-700">Result</h3>
          <p className="text-lg font-medium text-gray-700">{getResultMessage()}</p>
        </div>

        <div className="mt-6 text-center text-2xl font-bold text-blue-700">
          Total Heat Load: {totalAmount} BTU/h
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={resetValues}
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={downloadReport}
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CombinedHeatCalculators;
