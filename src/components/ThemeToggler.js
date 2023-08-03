import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user's preference for dark mode is stored in local storage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    } else {
      // If user preference not set, check for system preference
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Save user's preference for dark mode in local storage
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
    // Apply the theme
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const applyTheme = (isDarkMode) => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-color', '#1f1f1f');
      root.style.setProperty('--text-color', '000000');
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button style ={{background:'green'}} onClick={toggleMode} >
        {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggler;
