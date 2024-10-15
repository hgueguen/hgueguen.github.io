// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Si tu as un fichier CSS
import App from './App'; // Import de ton composant App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Si tu souhaites mesurer la performance, laisse cette ligne
reportWebVitals();
