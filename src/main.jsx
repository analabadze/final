import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

// Preload critical resources
const link = document.createElement('link');
link.rel = 'dns-prefetch';
link.href = 'https://www.themealdb.com';
document.head.appendChild(link);

// Preload critical font
const fontLink = document.createElement('link');
fontLink.rel = 'preload';
fontLink.href = 'local(Georgia)';
fontLink.as = 'font';
fontLink.type = 'font/ttf';
fontLink.crossOrigin = 'anonymous';
document.head.appendChild(fontLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)