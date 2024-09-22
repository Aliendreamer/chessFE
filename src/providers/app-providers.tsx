import { ThemeProvider } from '@/providers/theme-provider';
import { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
