export function accum(s: string): string {
  return s.split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}