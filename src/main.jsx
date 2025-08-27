import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { initScrollAnimations } from './utils/scrollAnimations.js'

// Initialize scroll animations after React renders
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Initialize scroll animations after React has rendered
setTimeout(() => {
  initScrollAnimations();
}, 100);
