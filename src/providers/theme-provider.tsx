import { createContext, useEffect, useState } from 'react';
import { THEME_VALUES, STORAGE_KEYS } from '@/helpers/constants';

type Theme = (typeof THEME_VALUES)[keyof typeof THEME_VALUES];

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: THEME_VALUES.SYSTEM,
    setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = THEME_VALUES.SYSTEM,
    storageKey = STORAGE_KEYS.UI_THEME_KEY,
    ...props
}: ThemeProviderProps): JSX.Element {
    const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(THEME_VALUES.DARK, THEME_VALUES.LIGHT);
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            localStorage.setItem(storageKey, theme);
            root.classList.add(systemTheme);
            return;
        }
        localStorage.setItem(storageKey, theme);
        root.classList.add(theme);
    }, [theme, storageKey]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}
