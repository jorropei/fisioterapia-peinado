import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeAnalytics } from './utils/analytics';
import { config } from './config/environment';

// Initialize Google Analytics only in production
if (config.analytics.enabled) {
  initializeAnalytics();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);