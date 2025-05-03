'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import SelectLocale from './SelectLocale';
import ToggleThemeButton from './ToggleThemeButton';
import { Icon } from '@iconify/react';

export default function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-dark-900 text-dark-900 dark:text-gray-100">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href={`/${locale}/`} className="logo text-lg font-bold">
            lcpereira.dev
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <Icon icon="mdi:close" className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Icon icon="mdi:menu" className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          <nav className="hidden md:flex items-center gap-2">
            <Link href={`/${locale}/`} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
            <Link href={`/${locale}/blog`} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Blog</Link>
            <SelectLocale />
            <ToggleThemeButton />
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden px-4 mt-2 flex flex-col gap-2">
            <Link href={`/${locale}/`} className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
            <Link href={`/${locale}/blog`} className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Blog</Link>
            <SelectLocale />
            <ToggleThemeButton />
          </nav>
        )}
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="text-gray-600 dark:text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Leandro Carlos Pereira — Todos os direitos reservados.
      </footer>
    </div>
  );
}
