import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const originalInfo = console.info;
console.info = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].includes('Download the React DevTools')) return;
  originalInfo(...args);
};
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
