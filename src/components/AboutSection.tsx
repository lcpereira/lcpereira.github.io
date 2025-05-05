'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  const timeline = [
    { year: '2012', text: t('timeline.2012') },
    { year: '2015', text: t('timeline.2015') },
    { year: '2020', text: t('timeline.2020') },
    { year: `2021 - ${new Date().getFullYear()}`, text: t('timeline.2021') },
  ];

  return (
    <motion.section
      id="about"
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-dark-900 dark:text-white">
        {t('title')}
      </h2>

      {[1, 2, 3, 4].map((i) => (
        <p
          key={i}
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
        >
          {t(`paragraph${i}`)}
        </p>
      ))}

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
          {t('timelineTitle')}
        </h3>

        <ul className="space-y-3 border-l border-gray-300 dark:border-gray-600 pl-4">
          {timeline.map(({ year, text }) => (
            <li key={year}>
              <span className="block text-sm text-gray-500 dark:text-gray-400">{year}</span>
              <p className="text-gray-700 dark:text-gray-300">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
