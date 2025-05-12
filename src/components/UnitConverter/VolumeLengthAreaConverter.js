'use client';
import { useState } from 'react';

export default function VolumeLengthAreaConverter() {
  const [volume, setVolume] = useState('');
  const [length, setLength] = useState('');
  const [area, setArea] = useState('');
  const [results, setResults] = useState({
    liter: '', cubicFeet: '',
    inch: '', foot: '',
    squareFeet: '', squareInch: ''
  });

  const convert = () => {
    const v = parseFloat(volume);
    const l = parseFloat(length);
    const a = parseFloat(area);

    setResults({
      liter: isNaN(v) ? '' : (v * 1000).toFixed(2),
      cubicFeet: isNaN(v) ? '' : (v * 35.3147).toFixed(2),

      inch: isNaN(l) ? '' : (l * 39.3701).toFixed(2),
      foot: isNaN(l) ? '' : (l * 3.28084).toFixed(2),

      squareFeet: isNaN(a) ? '' : (a * 10.7639).toFixed(2),
      squareInch: isNaN(a) ? '' : (a * 1550.0031).toFixed(2),
    });
  };

  return (
    <div>
      <h2>Volume, Length & Area Converter</h2>

      <div>
        <h4>Volume (m³)</h4>
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="m³"
        />
        <p>Liters: {results.liter}</p>
        <p>ft³: {results.cubicFeet}</p>
      </div>

      <div>
        <h4>Length (meters)</h4>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="meters"
        />
        <p>Inches: {results.inch}</p>
        <p>Feet: {results.foot}</p>
      </div>

      <div>
        <h4>Area (m²)</h4>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="m²"
        />
        <p>ft²: {results.squareFeet}</p>
        <p>in²: {results.squareInch}</p>
      </div>

      <button onClick={convert}>Convert All</button>
    </div>
  );
}

