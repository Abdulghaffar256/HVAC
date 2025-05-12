"use client";
import React, { useState } from "react";

const flowUnits = ["m³/s", "m³/h", "L/s", "CFM"];

const convertFlowRate = (value, from, to) => {
  let m3ps;

  // Convert to m³/s first
  switch (from) {
    case "m³/s":
      m3ps = value;
      break;
    case "m³/h":
      m3ps = value / 3600;
      break;
    case "L/s":
      m3ps = value / 1000;
      break;
    case "CFM":
      m3ps = value / 2119;
      break;
    default:
      return value;
  }

  // Convert from m³/s to target unit
  switch (to) {
    case "m³/s":
      return m3ps;
    case "m³/h":
      return m3ps * 3600;
    case "L/s":
      return m3ps * 1000;
    case "CFM":
      return m3ps * 2119;
    default:
      return value;
  }
};

const FlowRateConverter = () => {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("m³/s");
  const [to, setTo] = useState("CFM");

  const result = convertFlowRate(parseFloat(input), from, to);

  return (
    <div className="space-y-4">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter value"
      />
      <div className="flex justify-between gap-4">
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="border p-2 rounded w-1/2">
          {flowUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 rounded w-1/2">
          {flowUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div className="font-semibold text-purple-700">
        Result: {isNaN(result) ? "Invalid Input" : result.toFixed(4)} {to}
      </div>
    </div>
  );
};

export default FlowRateConverter;

