"use client";

import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";

// Import all converter components
import TemperatureConverter from "@/components/UnitConverter/TemperatureConverter";
import PressureConverter from "@/components/UnitConverter/PressureConverter";
import EnergyConverter from "@/components/UnitConverter/EnergyConverter";
import FlowRateConverter from "@/components/UnitConverter/FlowRateConverter";
import AirVelocityConverter from "@/components/UnitConverter/AirVelocityConverter";
import VolumeLengthAreaConverter from "@/components/UnitConverter/VolumeLengthAreaConverter";
import MassFlowConverter from "@/components/UnitConverter/MassFlowConverter";
import DensityConverter from "@/components/UnitConverter/DensityConverter";

const converters = [
  { id: "temperature", label: "Temperature", component: TemperatureConverter },
  { id: "pressure", label: "Pressure", component: PressureConverter },
  { id: "energy", label: "Energy", component: EnergyConverter },
  { id: "flow", label: "Volumetric Flow", component: FlowRateConverter },
  { id: "velocity", label: "Air Velocity", component: AirVelocityConverter },
  { id: "volumeLength", label: "Volume, Length, Area", component: VolumeLengthAreaConverter },
  { id: "massFlow", label: "Mass Flow", component: MassFlowConverter },
  { id: "density", label: "Density", component: DensityConverter },
];

const UnitConverter = () => {
  const [updateKey, setUpdateKey] = useState(0);
  const refs = useRef({});

  const resetAll = () => {
    setUpdateKey((prev) => prev + 1);
  };

  const recalculateAll = () => {
    setUpdateKey((prev) => prev + 1); // Triggers all converters to re-evaluate
  };

  const downloadReport = () => {
    const data = [["HVAC Unit Conversion Report"], [], ["Unit Type", "Input", "From Unit", "Output", "To Unit"]];

    for (const { id, label } of converters) {
      const converterRef = refs.current[id];
      if (converterRef && converterRef.getData) {
        const { input = "", fromUnit = "", result = "", toUnit = "" } = converterRef.getData();
        data.push([label, input, fromUnit, result, toUnit]);
      }
    }

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Unit Report");

    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "HVAC_Unit_Converter_Report.xlsx";
    link.click();
  };

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-gradient-to-br from-purple-50 to-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-purple-700">HVAC Unit Converter</h1>
        <p className="text-lg text-gray-600 mt-2">Convert HVAC-related units instantly and accurately.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {converters.map(({ id, label, component: Component }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{label}</h2>
            <Component
              key={updateKey}
              ref={(ref) => (refs.current[id] = ref)}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={resetAll}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Reset All
        </button>
        <button
          onClick={recalculateAll}
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Recalculate
        </button>
        <button
          onClick={downloadReport}
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default UnitConverter;

