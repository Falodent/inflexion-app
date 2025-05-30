export function formatFigure(num: number) {
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toPrecision(1)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 100_000) return `${(num / 1_000).toFixed(1)}K`;

  return num.toLocaleString();
}
