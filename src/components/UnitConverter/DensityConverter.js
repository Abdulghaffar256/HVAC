'use client';
import { useState } from 'react';

export default function DensityConverter() {
  const [kgm3, setKgm3] = useState('');
  const [result, setResult] = useState({ lbft3: '' });

  const convert = () => {
    const d = parseFloat(kgm3);
    setResult({
      lbft3: (d * 0.06242796).toFixed(4),
    });
  };

  return (
    <div>
      <h2>Density Converter (kg/m³ → lb/ft³)</h2>
      <input
        type="number"
        value={kgm3}
        onChange={(e) => setKgm3(e.target.value)}
        placeholder="kg/m³"
      />
      <button onClick={convert}>Convert</button>
      <p>lb/ft³: {result.lbft3}</p>
    </div>
  );
}

