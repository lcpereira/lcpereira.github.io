'use client';

export function LocalizedDate({ date, locale }: { date: string; locale: string }) {
  const formattedDate = new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <span>{formattedDate}</span>;
}
