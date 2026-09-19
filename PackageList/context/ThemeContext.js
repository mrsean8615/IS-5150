import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  card: "#eeeeee",
  placeholder: "#6B7280",
};

const darkTheme = {
  background: "#121212",
  text: "#ffffff",
  card: "#222222",
  placeholder: "#9CA3AF",
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
