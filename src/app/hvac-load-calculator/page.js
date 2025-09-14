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

  // ✅ Reads numbers from the DOM and updates parent results
  const syncResults = () => {
    const newResults = {
      exWall: getValueFromDOM("External Wall"),
      glass: getValueFromDOM("Glass"),
      roof: getValueFromDOM("Roof"),
      intWall: getValueFromDOM("Internal Wall"),
      lighting: getValueFromDOM("Lighting"),
      people: getValueFromDOM("People"),
      electrical: getValueFromDOM("Electrical"),
    };
    setResults(newResults);
  };

  // ✅ Helper: parse number from calculator card text
  const getValueFromDOM = (label) => {
    const el = [...document.querySelectorAll("div")].find((div) =>
      div.innerText.includes(label)
    );
    if (!el) return 0;
    const num = el.innerText.match(/([\d.]+)\s*(kW|Btu\/h)?/);
    if (!num) return 0;
    let value = parseFloat(num[1]);
    if (num[2] && num[2].includes("Btu")) {
      value = value / 3412; // convert to kW
    }
    return value || 0;
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
        <HeatTransferCalculator1 />
        <HeatTransferCalculator2 />
        <HeatTransferThroughRoof3 />
        <HeatTransferCalculator7 />
        <HeatGeneratedByLighting4 />
        <HeatCalculator5 />
        <div className="md:col-span-2">
          <HeatDissipationCalculator6 />
        </div>
      </div>

      {/* ✅ Sync Button */}
      <div className="mt-8 text-center">
        <button
          onClick={syncResults}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          🔄 Update Results
        </button>
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
