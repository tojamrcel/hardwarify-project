"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getFromLocalStorage, setToLocalStorage } from "../_lib/helpers";

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (getFromLocalStorage("darkMode")) {
      setIsDarkMode(JSON.parse(getFromLocalStorage("darkMode")!));
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setToLocalStorage("darkMode", true);
      console.log(getFromLocalStorage("darkMode"));
    } else {
      document.documentElement.classList.remove("dark");
      setToLocalStorage("darkMode", false);
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Context was used outside the provider");

  return context;
}
