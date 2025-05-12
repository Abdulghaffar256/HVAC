"use client";
import React, { useState } from "react";

const categories = {
  "Mass Flow": ["kg/s", "kg/h", "lb/s", "lb/h"],
};

const convert = (value, from, to) => {
  const val = parseFloat(value);
  if (isNaN(val)) return "";

  // Mass flow conversions
  const massFlowToKgPerSec = {
    "kg/s": 1,
    "kg/h": 3600,
    "lb/s": 2.20462,
    "lb/h": 7941,
  };

  let kgPerSec = val * massFlowToKgPerSec[from];
  return kgPerSec / massFlowToKgPerSec[to];
};

const MassFlowConverter = () => {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("kg/s");
  const [to, setTo] = useState("kg/h");

  const units = categories["Mass Flow"];
  const result = convert(input, from, to);

  return (
    <div className="space-y-4">
      <input
        type="number"
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-4">
        <select
          className="border p-2 rounded w-1/2"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded w-1/2"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {units.map((unit) => (
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

export default MassFlowConverter;

