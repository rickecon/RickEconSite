// Light markdown for plain-text data fields: [label](url) links and *italics*.
// Everything is HTML-escaped first, then only those two patterns become markup,
// so the fields stay safe to edit as plain text.
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const emphasize = (s: string) => s.replace(/\*([^*]+)\*/g, '<em>$1</em>');

export function richText(value: string) {
  // One pass over both patterns, so a URL is never rescanned for asterisks.
  return escapeHtml(value).replace(
    /\[([^\]]+)\]\(([^)\s]+)\)|\*([^*]+)\*/g,
    (whole, label, url, italic) => {
      if (italic !== undefined) return `<em>${italic}</em>`;
      const external = /^(https?:|mailto:)/i.test(url);
      // Allow absolute links, mail links, and site-relative paths; leave anything
      // else (e.g. a stray "javascript:") as the literal text that was typed.
      if (!external && !/^[/#]/.test(url)) return whole;
      const attrs = external ? ' target="_blank" rel="noopener"' : '';
      // Link labels may themselves contain *italics*.
      return `<a href="${url}"${attrs}>${emphasize(label)}</a>`;
    },
  );
}

// Group dated items by year, newest year first and newest item first.
export function byYear<T extends { date: string }>(items: T[]): { year: string; items: T[] }[] {
  const sorted = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const groups: { year: string; items: T[] }[] = [];
  for (const it of sorted) {
    const year = it.date.slice(0, 4);
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(it);
    else groups.push({ year, items: [it] });
  }
  return groups;
}
