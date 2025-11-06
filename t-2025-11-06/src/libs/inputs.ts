import readlineSync from 'readline-sync';

export function askNumber(prompt: string, min: number, max: number): number {
  let n: number;
  do {
    const input = readlineSync.question(`${prompt} <${min}; ${max}>: `);
    n = Number(input);
  } while (Number.isNaN(n) || n < min || n > max);
  return n;
}