'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from '@/hooks/useTheme';
import { useLocale } from '@/hooks/useLocale';


export default function Layout({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  function handleLocaleChange(newLocale: string) {
    if (newLocale === locale) return;

    const currentPathWithoutLocale = pathname?.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPathWithoutLocale}`);
  }

  const languageOptions: Record<string, { label: string; flag: string }> = {
    'pt-BR': { label: 'Português', flag: '🇧🇷' },
    'en-US': { label: 'English', flag: '🇺🇸' },
    'es-ES':    { label: 'Español', flag: '🇪🇸' },
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-dark-900 text-dark-900 dark:text-gray-100">
      <header className="bg-primary-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href={`/${locale}/`} className="text-2xl font-bold">
            Leandro Pereira
          </Link>

          <div className="flex items-center gap-4">
            <Link href={`/${locale}/`} className="hover:underline">Home</Link>
            <Link href={`/${locale}/blog`} className="hover:underline">Blog</Link>

            {/* Alternar tema */}
            <button onClick={toggleTheme} className="transition">
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>

            <div className="ml-4">
                <select
                    value={locale}
                    onChange={(e) => handleLocaleChange(e.target.value)}
                    className="bg-primary-700 text-white text-sm rounded px-2 py-1 focus:outline-none"
                >
                    {Object.entries(languageOptions).map(([lang, { label, flag }]) => (
                    <option key={lang} value={lang}>
                        {flag} {label}
                    </option>
                    ))}
                </select>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Leandro Carlos Pereira — Todos os direitos reservados.
      </footer>
    </div>
  );
}
