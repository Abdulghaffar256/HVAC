"use client";
import React, { useState } from "react";

const temperatureUnits = ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)"];

const convertTemperature = (value, from, to) => {
  let tempC;

  // Convert input to Celsius first
  switch (from) {
    case "Celsius (°C)":
      tempC = value;
      break;
    case "Fahrenheit (°F)":
      tempC = (value - 32) * 5 / 9;
      break;
    case "Kelvin (K)":
      tempC = value - 273.15;
      break;
    default:
      return value;
  }

  // Convert Celsius to target unit
  switch (to) {
    case "Celsius (°C)":
      return tempC;
    case "Fahrenheit (°F)":
      return tempC * 9 / 5 + 32;
    case "Kelvin (K)":
      return tempC + 273.15;
    default:
      return value;
  }
};

const TemperatureConverter = () => {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("Celsius (°C)");
  const [to, setTo] = useState("Fahrenheit (°F)");

  const result = convertTemperature(parseFloat(input), from, to);

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
          {temperatureUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 rounded w-1/2">
          {temperatureUnits.map((unit) => (
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

export default TemperatureConverter;

