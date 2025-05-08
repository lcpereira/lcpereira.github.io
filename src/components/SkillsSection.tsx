'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const skills = [
  {
    key: 'web',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular'],
    extras: ['Jest', 'Zustand', 'Tailwind CSS', 'Styled Components', 'Vite'],
  },
  {
    key: 'mobile',
    items: ['React Native'],
    extras: ['Expo', 'Jest', 'Zustand', 'MobX', 'React Navigation', 'Lottie'],
  },
  {
    key: 'backend',
    items: ['Node.js', 'NestJS', 'Java'],
    extras: ['Express', 'JWT', 'Swagger', 'Axios'],
  },
  {
    key: 'devops',
    items: ['Git', 'AWS', 'Docker', 'Kubernetes'],
    extras: ['GitHub Actions', 'Sentry', 'ELK Stack', 'Nginx', 'SonarQube'],
  },
  {
    key: 'database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
    extras: ['Mongoose', 'TypeORM', 'Supabase', 'Firebase'],
  },
  {
    key: 'learning',
    items: ['English (B2)', 'Flutter', 'Python'],
  },
];

export default function SkillsSection() {
  const [open, setOpen] = useState<string | null>(null);
  const t = useTranslations('skills');

  const toggle = (category: string) => {
    setOpen(open === category ? null : category);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-5">
        {t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map(({ key, items, extras }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-md p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
              {t(key)}
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-100"
                >
                  {skill}
                </li>
              ))}
            </ul>

            {extras && (
              <>
                <button
                  onClick={() => toggle(key)}
                  className="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {open === key ? t('hideExtras') : t('showExtras')}
                </button>
                <AnimatePresence>
                  {open === key && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 flex flex-wrap gap-2 text-sm overflow-hidden"
                    >
                      {extras.map((extra) => (
                        <li
                          key={extra}
                          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-100"
                        >
                          {extra}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
