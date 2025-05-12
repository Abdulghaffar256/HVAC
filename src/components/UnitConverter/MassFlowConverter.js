'use client';
import { useState } from 'react';

export default function MassFlowConverter() {
  const [kgs, setKgs] = useState('');
  const [result, setResult] = useState({ lbmHr: '', gMin: '' });

  const convert = () => {
    const k = parseFloat(kgs);
    setResult({
      lbmHr: (k * 7936.64).toFixed(2),
      gMin: (k * 1000 / 60).toFixed(2),
    });
  };

  return (
    <div>
      <h2>Mass Flow Rate Converter (kg/s → lbm/hr / g/min)</h2>
      <input
        type="number"
        value={kgs}
        onChange={(e) => setKgs(e.target.value)}
        placeholder="kg/s"
      />
      <button onClick={convert}>Convert</button>
      <p>lbm/hr: {result.lbmHr}</p>
      <p>g/min: {result.gMin}</p>
    </div>
  );
}


