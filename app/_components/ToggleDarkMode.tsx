"use client";

import { useDarkMode } from "./DarkModeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode()!;

  function handleToggle() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center rounded-full text-3xl"
    >
      {isDarkMode && <MdOutlineLightMode />}
      {!isDarkMode && <MdOutlineDarkMode />}
    </button>
  );
}

export default ToggleDarkMode;
