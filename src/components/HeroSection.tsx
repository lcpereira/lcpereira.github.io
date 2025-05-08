'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import emailOutlineIcon from '@iconify-icons/mdi/email-outline';
import { useLocale } from '@/hooks/useLocale';
import { useTranslations } from 'next-intl';

const socialLinks = [
  {
    href: 'https://github.com/lcpereira',
    label: 'GitHub',
    icon: githubIcon,
  },
  {
    href: 'https://linkedin.com/in/leandro9893',
    label: 'LinkedIn',
    icon: linkedinIcon,
  },
  {
    href: 'mailto:lcpereira.dev@gmail.com',
    label: 'Email',
    icon: emailOutlineIcon,
  },
];

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('hero');

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mb-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
        style={{
          width: 'clamp(160px, 30vw, 280px)',
          height: 'auto',
        }}
      >
        <Image
          src="/profile.jpeg"
          alt={t('imageAlt')}
          width={400}
          height={400}
          className="object-cover w-full h-auto rounded-md shadow-sm"
          priority
          quality={80}
          sizes="(max-width: 640px) 100vw, 280px"
        />
      </motion.div>

      <div className="text-center sm:text-left sm:flex-1">
        <p className="text-base text-gray-700 dark:text-gray-300 mb-1">{t('greeting')}</p>

        <h1
          className="font-display font-bold text-dark-900 dark:text-white mb-2"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.75rem)',
            lineHeight: '1.2',
          }}
        >
          Leandro Carlos Pereira
        </h1>

        <p className="text-primary-600 dark:text-primary-400 text-lg mt-3">
          {t('description')}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-6">
          {socialLinks.map(({ href, label, icon }) => (
            <Link key={label} href={href} target="_blank" aria-label={label}>
              <Icon icon={icon} className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" />
            </Link>
          ))}

          <a
            target="_blank"
            href={`/cv/${locale}/Leandro_Carlos_Pereira.pdf`}
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md transition-colors text-sm font-medium"
          >
            {t('downloadCV')}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
