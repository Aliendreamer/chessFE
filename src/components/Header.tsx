// src/components/Header.js
import { useTheme } from '@/hooks/use-theme';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { THEME_VALUES } from '@/helpers/constants';
const Header = (): JSX.Element => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = (): void => {
        const newTheme = theme === THEME_VALUES.LIGHT ? THEME_VALUES.DARK : THEME_VALUES.LIGHT;
        setTheme(newTheme);
        document.documentElement.classList.remove(theme); // Remove current theme class
        document.documentElement.classList.add(newTheme); // Add new theme class
        localStorage.setItem('ui-theme', newTheme); // Save the new theme to localStorage
    };
    return (
        <header className="tw-border-1 tw-flex tw-h-5 tw-items-center tw-justify-between tw-border-solid tw-border-black tw-p-6">
            <nav className="space-x-4">
                <a href="#" className="hover:tw-text-teal-600 dark:hover:tw-text-teal-400">
                    Home
                </a>
                <a href="#" className="hover:tw-text-teal-600 dark:hover:tw-text-teal-400">
                    About
                </a>
                <a href="#" className="hover:tw-text-teal-600 dark:hover:tw-text-teal-400">
                    Services
                </a>
                <a href="#" className="hover:tw-text-teal-600 dark:hover:tw-text-teal-400">
                    Contact
                </a>
            </nav>
            <button onClick={toggleTheme} className="tw-rounded-full tw-p-2 focus:tw-outline-none">
                {theme === 'tw-light' ? <IconMoonFilled /> : <IconSunFilled />}
            </button>
        </header>
    );
};

export default Header;
