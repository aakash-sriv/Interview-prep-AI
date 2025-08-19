// src/components/DarkModeToggle.jsx
import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import darkicon from "../assets/darkicon.png";
import lighticon from "../assets/lighticon.png";



export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-3 py-2 rounded-4xl  transition-colors duration-500 ease-in-out`}
    >
       <img 
        src={darkMode ? darkicon : lighticon} 
        alt="toggle dark mode"
        className="w-6 h-6"
      />
    </button>
  );
}
