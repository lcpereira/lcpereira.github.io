'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';
import { AnimatePresence, motion } from 'framer-motion';

const locales = [
  { flag: '🇧🇷', label: 'PT', value: 'pt-BR' },
  { flag: '🇺🇸', label: 'EN', value: 'en-US' },
  { flag: '🇪🇸', label: 'ES', value: 'es-ES' },
];

export default function LocaleDropdown() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const selected = locales.find((l) => l.value === locale) || locales[0];

  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function changeLocale(newLocale: string) {
    if (newLocale === locale) return;
  
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
  
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  
    window.location.replace(newPath);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 p-2 rounded-md bg-white dark:bg-dark-900 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span>{selected.flag}</span>
        <span>{selected.label}</span>
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 mt-2 w-full bg-white dark:bg-dark-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm overflow-hidden origin-top"
          >
            {locales.map((loc) => (
              <li
                key={loc.value}
                onClick={() => changeLocale(loc.value)}
                className="cursor-pointer px-3 py-2 hover:bg-primary-100 dark:hover:bg-primary-600 hover:text-primary-900 dark:hover:text-white flex items-center gap-2 transition-colors"
              >
                <span>{loc.flag}</span>
                <span>{loc.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
