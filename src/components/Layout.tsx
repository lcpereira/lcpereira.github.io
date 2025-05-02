'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useLocale } from '@/hooks/useLocale';
import SelectLocale from './SelectLocale';
import ToggleThemeButton from './ToggleThemeButton';


export default function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-dark-900 text-dark-900 dark:text-gray-100">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href={`/${locale}/`} className="text-lg font-bold">
            LCPEREIRA.DEV
          </Link>

          <div className="flex items-center gap-1">
            <Link href={`/${locale}/`} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
            <Link href={`/${locale}/blog`} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Blog</Link>

            <SelectLocale />
            <ToggleThemeButton />
          </div>
        </div>
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
