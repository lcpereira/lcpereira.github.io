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
        Sou desenvolvedor de software com mais de 12 anos de experiência, tendo iniciado na área de qualidade e evoluído para atuar com profundidade no desenvolvimento de sistemas modernos e escaláveis. Ao longo da minha jornada, participei de projetos desafiadores em empresas de diversos tamanhos, assumindo responsabilidades no front-end, back-end e, em alguns momentos, na infraestrutura.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Tenho experiência sólida com tecnologias como JavaScript, TypeScript, React, React Native, Angular, Node.js, NestJS e Java, além de conhecimento prático com bancos de dados SQL e NoSQL. Também já atuei com ferramentas de CI/CD, Docker e serviços AWS, contribuindo para a estabilidade e entrega contínua das aplicações.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Atualmente, continuo expandindo meu conhecimento em Flutter e no inglês para conversação, enquanto desenvolvo projetos próprios com foco em aprendizado e inovação.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Gosto de aprender, ensinar e construir com qualidade.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">Linha do tempo</h3>
        <ul className="space-y-3 border-l border-gray-300 dark:border-gray-600 pl-4">
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2012</span>
            <p className="text-gray-700 dark:text-gray-300">Início na área de qualidade de software na TOTVS, onde desenvolvi uma base sólida em boas práticas de desenvolvimento.</p>
          </li>
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2015</span>
            <p className="text-gray-700 dark:text-gray-300">Transição para desenvolvimento front-end, tornando-me referência técnica na equipe com foco em Angular e tecnologias modernas.</p>
          </li>
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2020</span>
            <p className="text-gray-700 dark:text-gray-300">Expansão para back-end com Node.js, NestJS e Java, buscando uma atuação mais completa e fullstack.</p>
          </li>
          <li>
            <span className="block text-sm text-gray-500 dark:text-gray-400">2021 — hoje</span>
            <p className="text-gray-700 dark:text-gray-300">Atuação em projetos mobile com React Native e liderança técnica no Zé Express (Ambev), contribuindo com evolução de produto, arquitetura e boas práticas.</p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
