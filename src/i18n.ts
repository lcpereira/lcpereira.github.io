export const locales = ['en-US', 'es-ES', 'pt-BR'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en-US';

export const defaultTimeZone = 'America/Sao_Paulo';
