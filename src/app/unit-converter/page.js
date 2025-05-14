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

// Example color classes per converter
const converters = [
  { id: "temperature", label: "Temperature", component: TemperatureConverter, color: "blue" },
  { id: "pressure", label: "Pressure", component: PressureConverter, color: "red" },
  { id: "energy", label: "Energy", component: EnergyConverter, color: "green" },
  { id: "flow", label: "Volumetric Flow", component: FlowRateConverter, color: "purple" },
  { id: "velocity", label: "Air Velocity", component: AirVelocityConverter, color: "orange" },
  { id: "volumeLength", label: "Volume, Length, Area", component: VolumeLengthAreaConverter, color: "teal" },
  { id: "massFlow", label: "Mass Flow", component: MassFlowConverter, color: "rose" },
  { id: "density", label: "Density", component: DensityConverter, color: "indigo" },
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
        {converters.map(({ id, label, component: Component, color }) => (
          <div key={id} className={`border-l-4 border-${color}-500 bg-white shadow-lg rounded-lg transition`}>
            <div
              onClick={() => toggleExpand(id)}
              className={`flex items-center justify-between px-6 py-4 cursor-pointer bg-${color}-100 rounded-t-lg`}
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

      <div className="mt-12 flex justify-center gap-6">
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

