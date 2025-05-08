'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

type PostContentProps = {
  title: string;
  date: string;
  content: string;
};

export default function PostContent({ title, date, content }: PostContentProps) {
  return (
    <article
      className="max-w-3xl mx-auto px-4 py-8"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header className="mb-8">
        <h1 itemProp="headline" className="text-4xl font-bold text-dark-900 dark:text-gray-100 mb-2">
          {title}
        </h1>
        <p
          className="text-gray-500 dark:text-gray-400 text-sm"
          itemProp="datePublished"
          content={date}
        >
          {date}
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypePrism]}
          components={{
            a: ({ ...props }) => (
              <a
                {...props}
                className="text-primary-600 dark:text-primary-400 underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
            code: ({ children, ...props }) => {

              return (
                <code {...props} className="whitespace-pre-wrap">
                    {children}
                </code>
              );
            },
            h1: ({ ...props }) => (
              <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-dark-900 dark:text-gray-100" />
            ),
            h2: ({ children, ...props }) => {
              const text = String(children).replace(/\s+/g, '-').toLowerCase();
              return (
                <h2
                  id={text}
                  {...props}
                  className="text-2xl font-bold mt-6 mb-4 text-dark-900 dark:text-gray-100 scroll-mt-24"
                >
                  {children}
                </h2>
              );
            },
            h3: ({ children, ...props }) => {
              const text = String(children).replace(/\s+/g, '-').toLowerCase();
              return (
                <h3
                  id={text}
                  {...props}
                  className="text-xl font-semibold mt-4 mb-2 text-dark-900 dark:text-gray-100 scroll-mt-24"
                >
                  {children}
                </h3>
              );
            },
            ul: ({ ...props }) => (
              <ul {...props} className="list-disc pl-5 mb-4 text-dark-900 dark:text-gray-100" />
            ),
            ol: ({ ...props }) => (
              <ol {...props} className="list-decimal pl-5 mb-4 text-dark-900 dark:text-gray-100" />
            ),
            li: ({ ...props }) => (
              <li {...props} className="mb-2 text-dark-900 dark:text-gray-100" />
            ),
            p: ({ ...props }) => (
              <p {...props} className="mb-4 text-dark-900 dark:text-gray-100" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
