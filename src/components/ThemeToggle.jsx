// src/components/ThemeToggle.jsx
import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <span>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
