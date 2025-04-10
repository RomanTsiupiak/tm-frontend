import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryProvider, RouterProvider } from './app/providers';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  </StrictMode>
);
