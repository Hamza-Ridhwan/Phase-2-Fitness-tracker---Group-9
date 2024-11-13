import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this is the correct import for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for rendering the React app in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root div with React Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Report web vitals for performance tracking
reportWebVitals();
