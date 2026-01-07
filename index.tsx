
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log('Ronohills AI: Initializing application...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("FATAL: Could not find root element to mount the React application.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Ronohills AI: Application mounted successfully.');
  } catch (error) {
    console.error('Ronohills AI: Mounting error:', error);
  }
}
