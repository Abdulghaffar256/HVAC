"use client";

import { useEffect, useState, useRef } from "react";

export default function AdvancedTextToSpeech() {
  const [text, setText] = useState("Welcome to our HVAC system calculator!");
  const [voices, setVoices] = useState([]);
  const [language, setLanguage] = useState("all");   // "en", "ur", or "all"
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const utteranceRef = useRef(null);

  // ---------- Load voices ----------
  useEffect(() => {
    const loadVoices = () => {
      const voicesList = speechSynthesis.getVoices();
      setVoices(voicesList);

      // Auto‑select based on language preference
      let defaultVoice;
      if (language === "ur") {
        defaultVoice = voicesList.find(v => v.lang.toLowerCase().includes("ur"));
      } else if (language === "en") {
        defaultVoice = voicesList.find(v => v.lang.toLowerCase().startsWith("en"));
      }
      if (!defaultVoice) {
        defaultVoice = voicesList[0]; // fallback
      }
      if (defaultVoice) setSelectedVoice(defaultVoice.name);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [language]);

  // ---------- Speech handlers ----------
  const speak = () => {
    if (isSpeaking || !text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.name === selectedVoice);
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

  // ---------- Filter voices by selected language ----------
  const filteredVoices =
    language === "all"
      ? voices
      : voices.filter(v =>
          language === "ur"
            ? v.lang.toLowerCase().includes("ur")
            : v.lang.toLowerCase().startsWith("en")
        );

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto my-10 space-y-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-300">
        🎤 Advanced Text‑to‑Speech Converter
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Enter text in English or Urdu…"
        className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Language selector */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
            Language
          </label>
          <select
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="all">🌐 All</option>
            <option value="en">🇬🇧 English</option>
            <option value="ur">🇵🇰 Urdu</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300">
            Voice
          </label>
          <select
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
          >
            {filteredVoices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Controls for rate & pitch */}
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

      {/* Speak / Pause / Resume / Stop */}
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
      </div>

      {/* Helpful notice when no Urdu voices exist */}
      {language === "ur" && filteredVoices.length === 0 && (
        <p className="text-center text-sm text-red-600 dark:text-red-400 pt-2">
          No Urdu voices detected on this device. Install an Urdu TTS voice in your OS or
          try Chrome on Android to enable Urdu speech.
        </p>
      )}

      <div className="text-center pt-4 text-sm text-gray-600 dark:text-gray-400">
        Supports English & Urdu. Select the appropriate language → voice for the most
        natural pronunciation.
      </div>
    </div>
  );
}

