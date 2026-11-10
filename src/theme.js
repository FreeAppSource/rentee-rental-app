import React, { createContext, useContext, useState } from 'react';

export const lightColors = {
  mode: 'light',
  primary: '#583EF2',
  primarySoft: '#F1F0FF',
  secondary: '#EEA86C',
  secondarySoft: '#FEF4EE',
  dark: '#1F1F39',
  heading: '#1F1F39',
  text: '#383E5E',
  textSecondary: '#78829D',
  textMuted: '#B1B8C7',
  background: '#F9F9FB',
  surface: '#FFFFFF',
  cardBg: '#FFFFFF',
  inputBg: '#F3F6FD',
  border: '#EBEFF5',
  borderLight: '#F5F7FB',
  white: '#FFFFFF',
  black: '#000000',
  success: '#34C759',
  danger: '#FF4D4F',
};

export const darkColors = {
  mode: 'dark',
  primary: '#6D55FF',
  primarySoft: '#28234D',
  secondary: '#EEA86C',
  secondarySoft: '#382D24',
  dark: '#FFFFFF',
  heading: '#FFFFFF',
  text: '#E2E6F0',
  textSecondary: '#A2A9BD',
  textMuted: '#687087',
  background: '#121224',
  surface: '#1F1F39',
  cardBg: '#1F1F39',
  inputBg: '#18182E',
  border: '#2C2C4E',
  borderLight: '#23233E',
  white: '#FFFFFF',
  black: '#000000',
  success: '#34C759',
  danger: '#FF4D4F',
};

const ThemeContext = createContext({
  theme: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);
  const theme = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
