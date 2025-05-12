'use client';
import { useState } from 'react';

export default function AirVelocityConverter() {
  const [mps, setMps] = useState('');
  const [result, setResult] = useState({ fpm: '', kph: '' });

  const convert = () => {
    const m = parseFloat(mps);
    setResult({
      fpm: (m * 196.85).toFixed(2),
      kph: (m * 3.6).toFixed(2),
    });
  };

  return (
    <div>
      <h2>Air Velocity Converter (m/s → FPM / km/h)</h2>
      <input
        type="number"
        value={mps}
        onChange={(e) => setMps(e.target.value)}
        placeholder="m/s"
      />
      <button onClick={convert}>Convert</button>
      <p>FPM: {result.fpm}</p>
      <p>km/h: {result.kph}</p>
    </div>
  );
}

