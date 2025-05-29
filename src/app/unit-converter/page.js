'use client';
import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import {
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Download,
  RefreshCw,
} from 'lucide-react';

import TemperatureConverter from '@/components/UnitConverter/TemperatureConverter';
import PressureConverter from '@/components/UnitConverter/PressureConverter';
import EnergyConverter from '@/components/UnitConverter/EnergyConverter';
import FlowRateConverter from '@/components/UnitConverter/FlowRateConverter';
import AirVelocityConverter from '@/components/UnitConverter/AirVelocityConverter';
import VolumeLengthAreaConverter from '@/components/UnitConverter/VolumeLengthAreaConverter';
import MassFlowConverter from '@/components/UnitConverter/MassFlowConverter';
import DensityConverter from '@/components/UnitConverter/DensityConverter';


const converters = [
  {
    id: "temperature",
    label: "Temperature",
    component: TemperatureConverter,
    colorClasses: {
      bg: "bg-blue-100",
      border: "border-blue-500"
    }
  },
  {
    id: "pressure",
    label: "Pressure",
    component: PressureConverter,
    colorClasses: {
      bg: "bg-red-100",
      border: "border-red-500"
    }
  },
  {
    id: "energy",
    label: "Energy",
    component: EnergyConverter,
    colorClasses: {
      bg: "bg-green-100",
      border: "border-green-500"
    }
  },
  {
    id: "flow",
    label: "Volumetric Flow",
    component: FlowRateConverter,
    colorClasses: {
      bg: "bg-purple-100",
      border: "border-purple-500"
    }
  },
  {
    id: "velocity",
    label: "Air Velocity",
    component: AirVelocityConverter,
    colorClasses: {
      bg: "bg-orange-100",
      border: "border-orange-500"
    }
  },
  {
    id: "volumeLength",
    label: "Volume, Length, Area",
    component: VolumeLengthAreaConverter,
    colorClasses: {
      bg: "bg-teal-100",
      border: "border-teal-500"
    }
  },
  {
    id: "massFlow",
    label: "Mass Flow",
    component: MassFlowConverter,
    colorClasses: {
      bg: "bg-rose-100",
      border: "border-rose-500"
    }
  },
  {
    id: "density",
    label: "Density",
    component: DensityConverter,
    colorClasses: {
      bg: "bg-indigo-100",
      border: "border-indigo-500"
    }
  }
];

const UnitConverter = () => {
  const [updateKey, setUpdateKey] = useState(0);
  const [expanded, setExpanded] = useState({});
  const refs = useRef({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => setUpdateKey(prev => prev + 1);
  const recalculateAll = () => setUpdateKey(prev => prev + 1);

  const downloadReport = () => {
    const data = [["HVAC Unit Conversion Report"], [], ["Unit Type", "Input", "From Unit", "Output", "To Unit"]];
    for (const { id, label } of converters) {
      const converterRef = refs.current[id];
      if (converterRef?.getData) {
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

      <div className="space-y-6">
        {converters.map(({ id, label, component: Component, colorClasses }) => (
          <div key={id} className={`border-l-4 ${colorClasses.border} bg-white shadow-lg rounded-lg transition`}>
            <div
              onClick={() => toggleExpand(id)}
              className={`flex items-center justify-between px-6 py-4 cursor-pointer ${colorClasses.bg} rounded-t-lg`}
            >
              <h2 className="text-lg font-bold text-gray-800">{label}</h2>
              {expanded[id] ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expanded[id] && (
              <div className="p-6 border-t border-gray-200">
                <Component key={updateKey} ref={(ref) => (refs.current[id] = ref)} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        <button
          onClick={resetAll}
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700"
        >
          <RotateCcw size={18} /> Reset All
        </button>

        <button
          onClick={recalculateAll}
          className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg shadow hover:bg-yellow-600"
        >
          <RefreshCw size={18} /> Recalculate
        </button>

        <button
          onClick={downloadReport}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700"
        >
          <Download size={18} /> Download Report
        </button>
      </div>
    </div>
  );
};

export default UnitConverter;
