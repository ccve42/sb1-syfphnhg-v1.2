import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '/src/App.tsx';
import { LanguageProvider } from '/src/contexts/LanguageContext';
import '/src/index.css';
import ScrollToTop from '/src/components/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
