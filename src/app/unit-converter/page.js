"use client";

import React, { useState } from "react";
import TemperatureConverter from "@/components/UnitConverter/TemperatureConverter";
import LengthConverter from "@/components/UnitConverter/LengthConverter";
import PressureConverter from "@/components/UnitConverter/PressureConverter";
import EnergyConverter from "@/components/UnitConverter/EnergyConverter";
import FlowRateConverter from "@/components/UnitConverter/FlowRateConverter";

const converters = [
  { id: "temp", label: "Temperature", component: TemperatureConverter },
  { id: "length", label: "Length", component: LengthConverter },
  { id: "pressure", label: "Pressure", component: PressureConverter },
  { id: "energy", label: "Energy", component: EnergyConverter },
  { id: "flow", label: "Flow Rate", component: FlowRateConverter },
];

const UnitConverter = () => {
  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-gradient-to-br from-purple-50 to-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-purple-700">HVAC Unit Converter</h1>
        <p className="text-lg text-gray-600 mt-2">
          Convert HVAC-related units instantly and accurately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {converters.map(({ id, label, component: Component }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{label}</h2>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitConverter;

