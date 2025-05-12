"use client";

import React, { useState } from "react";
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

  const resetAll = () => {
    setUpdateKey((prev) => prev + 1);
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
            <Component key={updateKey} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={resetAll}
          className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default UnitConverter;
