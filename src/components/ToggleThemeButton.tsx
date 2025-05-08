'use client';

import { Icon } from '@iconify/react';
import weatherSunnyIcon from '@iconify-icons/mdi/weather-sunny';
import weatherNightIcon from '@iconify-icons/mdi/weather-night';
import useTheme from '@/hooks/useTheme';

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
    >
      {theme === 'dark' ? (
        <Icon icon={weatherSunnyIcon} className="w-5 h-5 text-yellow-400" />
      ) : (
        <Icon icon={weatherNightIcon} className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
