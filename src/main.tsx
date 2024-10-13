import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from '@/providers/app-providers';
import { GamePage } from '@/pages/GamePage';
import '@/index.css';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProviders>
            <GamePage />
        </AppProviders>
    </StrictMode>,
);
