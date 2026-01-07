
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Ronohills AI - Frontend Initialization
 * Ensuring robust mount point and unified React instance usage.
 */

const startApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error("FATAL: Could not find root element. The DOM is likely not ready or index.html is malformed.");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Ronohills AI: Application mounted successfully.');
  } catch (error) {
    console.error('Ronohills AI: Runtime error during mounting:', error);
    // Provide a visual fallback for catastrophic failures
    rootElement.innerHTML = `
      <div style="padding: 20px; color: #ef4444; font-family: sans-serif; text-align: center; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #030712;">
        <h1 style="font-size: 24px; margin-bottom: 10px;">Initialization Failed</h1>
        <p style="color: #9ca3af;">Please refresh the page. If the issue persists, check the developer console.</p>
      </div>
    `;
  }
};

// Start the app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
