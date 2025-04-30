import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // i18n: {
  //   locales: ['pt-BR', 'en-US'],
  //   defaultLocale: 'pt-BR'
  // }
};

export default createMDX()(nextConfig);
