'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-dark-900 dark:text-white">Sobre mim</h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sou desenvolvedor de software com mais de 12 anos de experiência, tendo começado na área de qualidade e evoluído para um perfil sênior de desenvolvimento. 
        Ao longo da minha jornada, participei de projetos desafiadores em empresas de diferentes portes, sempre com foco em criar soluções eficientes e escaláveis.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Tenho experiência prática com diferentes tecnologias no front-end, back-end e DevOps. Gosto de atuar com profundidade técnica, mas também valorizo boas práticas, colaboração e qualidade.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">Linha do tempo</h3>
        <ul className="space-y-3 border-l border-gray-300 dark:border-gray-600 pl-4">
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2012</span>
            <p className="text-gray-700 dark:text-gray-300">Início na área de qualidade de software na TOTVS.</p>
          </li>
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2015</span>
            <p className="text-gray-700 dark:text-gray-300">Transição para front-end e atuação em projetos com Angular.</p>
          </li>
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2020</span>
            <p className="text-gray-700 dark:text-gray-300">Ampliação para back-end com Node.js, NestJS e Java.</p>
          </li>
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2021 — hoje</span>
            <p className="text-gray-700 dark:text-gray-300">Atuação em projetos mobile com React Native, liderança técnica e evolução de produto.</p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
