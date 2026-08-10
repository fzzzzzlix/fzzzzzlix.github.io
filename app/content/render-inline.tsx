import { Fragment, type ReactNode } from "react";

/*
 * Lightweight inline-markup renderer for content strings.
 *
 * Content lives as plain text in app/content/. Two markers are supported so
 * editors never have to touch JSX:
 *   **bold text**    -> <strong>bold text</strong>
 *   *italic text*    -> <em>italic text</em>
 *
 * Everything else is rendered as literal text. Write curly quotes, en dashes
 * and accented characters as real Unicode (' " " – é), not HTML entities.
 *
 * Rules: markers must not be nested and must not contain a lone `*` inside.
 */
export function inline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
