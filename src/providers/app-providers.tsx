import { ThemeProvider } from '@/providers/theme-provider';
import { ReactNode } from 'react';
import { Layout } from '@/pages/Layout';
export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <Layout>{children}</Layout>
        </ThemeProvider>
    );
}
