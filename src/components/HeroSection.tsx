'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLocale } from '@/hooks/useLocale';

export default function HeroSection() {
  const locale = useLocale();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-12"
    >
      <div className="text-center md:text-left md:w-2/3">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Olá, sou</p>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-900 dark:text-white">
          Leandro Carlos Pereira
        </h1>

        <p className="text-primary-600 dark:text-primary-400 text-lg mt-3">
          Desenvolvedor de Software focado em criar soluções eficientes, modernas e escaláveis.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mt-6">
          <Link href="https://github.com/lcpereira" target="_blank" aria-label="GitHub">
            <Icon icon="mdi:github" className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/leandro9893" target="_blank" aria-label="LinkedIn">
            <Icon icon="mdi:linkedin" className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors" />
          </Link>
          <Link href="mailto:lcpereira.dev@gmail.com" aria-label="Email">
            <Icon icon="mdi:email-outline" className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors" />
          </Link>

          <a
            target="_blank"
            href={`/cv/${locale}/Leandro_Carlos_Pereira.pdf`}
            className="ml-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md transition-colors text-sm font-medium"
          >
            Baixar CV
          </a>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-xs md:max-w-sm rounded-md overflow-hidden shadow-lg"
      >
        <Image
          src="/profile.jpeg"
          alt="Foto de Leandro Carlos Pereira"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
