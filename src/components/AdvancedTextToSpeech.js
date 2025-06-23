"use client";

import { useEffect, useState, useRef } from "react";

export default function AdvancedTextToSpeech() {
  const [text, setText] = useState("Welcome to our HVAC system calculator!");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const utteranceRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = speechSynthesis.getVoices();
      const englishVoices = voicesList.filter((v) =>
        v.lang.toLowerCase().startsWith("en")
      );
      setVoices(englishVoices);
      if (englishVoices.length > 0) {
        setSelectedVoice(englishVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = () => {
    if (isSpeaking || !text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  const pause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) speechSynthesis.pause();
  };

  const resume = () => {
    if (speechSynthesis.paused) speechSynthesis.resume();
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const downloadAudio = async () => {
    const res = await fetch(`/api/ttsmp3?text=${encodeURIComponent(text)}`);
    if (!res.ok) {
      alert("Failed to generate MP3.");
      return;
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tts-voice.mp3";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto my-10 space-y-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-300">
        🎤 Advanced Text‑to‑Speech Converter
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Enter text in English…"
        className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div>
        <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
          Voice
        </label>
        <select
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
            Rate: {rate.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
            Pitch: {pitch.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center pt-4">
        <button
          onClick={speak}
          disabled={isSpeaking}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          🔊 Speak
        </button>
        <button
          onClick={pause}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg shadow transition"
        >
          ⏸ Pause
        </button>
        <button
          onClick={resume}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          ▶ Resume
        </button>
        <button
          onClick={stop}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          ⏹ Stop
        </button>
        <button
          onClick={downloadAudio}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          💾 Download MP3
        </button>
      </div>

      <div className="text-center pt-4 text-sm text-gray-600 dark:text-gray-400">
        Supports English voice only 🌟.
      </div>
    </div>
  );
}

