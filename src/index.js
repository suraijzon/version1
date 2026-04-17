import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// react-snap pre-renders HTML into #root — use hydrateRoot when content exists
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
