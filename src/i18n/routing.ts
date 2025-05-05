import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en-US', 'es-ES', 'pt-BR'],
  defaultLocale: 'en-US'
});
