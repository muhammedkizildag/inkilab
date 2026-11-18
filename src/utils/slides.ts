export function formatSlideRange(slides: number[]): string {
  if (!slides.length) return '';
  const sorted = Array.from(new Set(slides)).sort((a, b) => a - b);
  const parts: string[] = [];
  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      parts.push(start === end ? `${start}` : `${start}–${end}`);
      start = sorted[i];
      end = sorted[i];
    }
  }
  parts.push(start === end ? `${start}` : `${start}–${end}`);
  return `Slayt ${parts.join(', ')}`;
}
