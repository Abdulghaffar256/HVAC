"use client";
import React, { useState } from "react";

const pressureUnits = ["Pa", "kPa", "bar", "psi", "in H₂O", "in Hg"];

const convertPressure = (value, from, to) => {
  let pa;

  // Convert to Pascals first
  switch (from) {
    case "Pa":
      pa = value;
      break;
    case "kPa":
      pa = value * 1000;
      break;
    case "bar":
      pa = value * 100000;
      break;
    case "psi":
      pa = value * 6894.8;
      break;
    case "in H₂O":
      pa = value * 249.089;
      break;
    case "in Hg":
      pa = value * 3386.4;
      break;
    default:
      return value;
  }

  // Convert Pascals to target unit
  switch (to) {
    case "Pa":
      return pa;
    case "kPa":
      return pa / 1000;
    case "bar":
      return pa / 100000;
    case "psi":
      return pa / 6894.8;
    case "in H₂O":
      return pa / 249.089;
    case "in Hg":
      return pa / 3386.4;
    default:
      return value;
  }
};

const PressureConverter = () => {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("Pa");
  const [to, setTo] = useState("psi");

  const result = convertPressure(parseFloat(input), from, to);

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
          {pressureUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 rounded w-1/2">
          {pressureUnits.map((unit) => (
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

export default PressureConverter;

