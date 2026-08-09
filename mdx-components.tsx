import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Reading typography for lab notes. 68ch measure, hairline rules,
 * mono for anything that is a reference rather than a sentence.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="t-sub mt-14 mb-4 scroll-mt-24 text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-[1.0625rem] font-medium tracking-[-0.015em] text-ink">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-5 text-[1.0625rem] leading-[1.72] text-ink-2">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="font-medium text-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-ink-2">{children}</em>,
    ul: ({ children }) => (
      <ul className="mb-5 space-y-2.5 pl-0">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2.5 pl-5 marker:font-mono marker:text-[0.75rem] marker:text-ink-3">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-[1.0625rem] leading-[1.72] text-ink-2">{children}</li>
    ),
    a: ({ href, children }) => {
      const url = String(href ?? "");
      if (url.startsWith("/")) {
        return (
          <Link href={url} className="link-underline text-ink">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline text-ink"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="rounded-[3px] border border-hairline bg-surface px-[5px] py-[2px] font-mono text-[0.8125em] text-ink">
        {children}
      </code>
    ),
    hr: () => <hr className="my-12 border-0 border-t border-hairline" />,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l border-hairline-bright pl-5 text-[1.0625rem] italic leading-[1.7] text-ink-2">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
