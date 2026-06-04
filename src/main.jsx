import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { FontProvider } from './context/FontContext';
import { AuthProvider } from './context/AuthContext';
import { AudioProvider } from './context/AudioContext';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontProvider>
        <AuthProvider>
          <AudioProvider>
            <App />
          </AudioProvider>
        </AuthProvider>
      </FontProvider>
    </ThemeProvider>
  </React.StrictMode>
);
