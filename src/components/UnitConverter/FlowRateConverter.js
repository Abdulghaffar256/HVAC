'use client';
import { useState } from 'react';

export default function FlowRateConverter() {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('m³/s');
  const [to, setTo] = useState('CFM');
  const [result, setResult] = useState('');

  const flowUnits = ['m³/s', 'm³/h', 'L/s', 'CFM'];

  const convertFlowRate = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      setResult('Invalid input');
      return;
    }

    let m3ps;

    // Convert to m³/s first
    switch (from) {
      case 'm³/s':
        m3ps = value;
        break;
      case 'm³/h':
        m3ps = value / 3600;
        break;
      case 'L/s':
        m3ps = value / 1000;
        break;
      case 'CFM':
        m3ps = value / 2119;
        break;
      default:
        m3ps = value;
    }

    // Convert to target unit
    let converted;
    switch (to) {
      case 'm³/s':
        converted = m3ps;
        break;
      case 'm³/h':
        converted = m3ps * 3600;
        break;
      case 'L/s':
        converted = m3ps * 1000;
        break;
      case 'CFM':
        converted = m3ps * 2119;
        break;
      default:
        converted = m3ps;
    }

    setResult(`${converted.toFixed(4)} ${to}`);
  };

  return (
    <div>
      <h2>Flow Rate Converter</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />

      <div>
        <label>From:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {flowUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <div>
        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {flowUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <button onClick={convertFlowRate}>Convert</button>

      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}
