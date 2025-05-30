import React, { useState, useMemo, createContext } from 'react';
import './App.css';
import CricketManagerRoadmap from './CricketManagerRoadmap';

// ThemeContext for light/dark theme management
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {}
});

// PUBLIC_INTERFACE
/**
 * App root component: renders the CricketManagerRoadmap container as main UI.
 * Provides ThemeContext for toggling between light/dark mode.
 */
function App() {
  const [theme, setTheme] = useState("light");

  // Update CSS class on body when theme changes
  React.useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  // contextValue memoized for good practice
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={contextValue}>
      <CricketManagerRoadmap />
    </ThemeContext.Provider>
  );
}

export default App;