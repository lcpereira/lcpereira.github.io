import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  swcMinify: false,
  headers: async () => {
    return Promise.resolve([
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]);
  }
};
const withNextIntl = createNextIntlPlugin();

export default createMDX()(withNextIntl(nextConfig));
