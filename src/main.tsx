import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Terms from './Terms.tsx';
import Privacy from './Privacy.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termos-de-uso" element={<Terms />} />
        <Route path="/politica-de-privacidade" element={<Privacy />} />
      </Routes>
    </Router>
  </StrictMode>
);
