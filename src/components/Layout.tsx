'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import SelectLocale from './SelectLocale';
import ToggleThemeButton from './ToggleThemeButton';
import { Icon } from '@iconify/react';
import closeIcon from '@iconify-icons/mdi/close';
import menuIcon from '@iconify-icons/mdi/menu';
import { useTranslations } from 'next-intl';

export default function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('layout');

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-white dark:bg-dark-900 text-dark-900 dark:text-gray-100">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link
            prefetch={true}
            href="/"
            locale={locale} className="logo text-lg font-bold"
          >
            {t('siteName')}
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t('menu.close') : t('menu.open')}
          >
            {isOpen ? (
              <Icon icon={closeIcon} className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Icon icon={menuIcon} className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          <nav className="hidden md:flex items-center gap-2">
            <Link
              prefetch={true}
              href="/"
              locale={locale}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              prefetch={true}
              href="/blog"
              locale={locale}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('nav.blog')}
            </Link>
            <SelectLocale />
            <ToggleThemeButton />
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden px-4 mt-2 flex flex-col gap-2">
            <Link
              prefetch={true}
              href="/"
              locale={locale}
              className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              prefetch={true}
              href="/blog"
              locale={locale}
              className="block p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {t('nav.blog')}
            </Link>
            <SelectLocale />
            <ToggleThemeButton />
          </nav>
        )}
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

      <footer className="text-gray-600 dark:text-gray-400 text-center py-6 text-sm">
        {t('footer.text', { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
}
