'use client';

import { useState } from 'react';

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-1 right-2 bg-primary-600 dark:bg-primary-400 text-white dark:text-gray-900 text-xs px-2 py-1 rounded hover:opacity-90 transition-opacity"
    >
      {copied ? 'Copiado!' : 'Copiar'}
    </button>
  );
}
