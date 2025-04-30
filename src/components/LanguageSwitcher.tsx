'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    const newPath = pathname!.replace(/^\/(pt-BR|en-US)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-4 mb-6">
      <button onClick={() => switchLanguage('pt-BR')}>🇧🇷 Português</button>
      <button onClick={() => switchLanguage('en-US')}>🇺🇸 English</button>
    </div>
  );
}
