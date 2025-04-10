import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryProvider, AuthProvider, RouterProvider } from './app/providers';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);
