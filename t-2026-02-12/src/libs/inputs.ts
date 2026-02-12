import readlineSync from 'readline-sync';

export function askNumber(promptText: string, min: number, max: number): number {
  let n: number;
  do {
    process.stdout.write(`${promptText} <${min}; ${max}>: `);
    const input = readlineSync.prompt();
    n = parseInt(input || '');
    if (Number.isNaN(n) || n < min || n > max) {
      console.log(`Zadej číslo mezi ${min} a ${max}`);
    }
  } while (Number.isNaN(n) || n < min || n > max);
  return n;
}

export function askString(promptText: string): string {
  let input: string;
  do {
    process.stdout.write(`${promptText}: `);
    input = readlineSync.prompt();
    if (!input || input.trim() === '') {
      console.log('Prosím zadej nějaký text');
    }
  } while (!input || input.trim() === '');
  return input;
}

export function askBoolean(promptText: string): boolean {
  let input: string;
  do {
    process.stdout.write(`${promptText} (a/n): `);
    input = readlineSync.prompt().toLowerCase();
    if (input !== 'a' && input !== 'n') {
      console.log('Zadej prosím "a" pro ano nebo "n" pro ne');
    }
  } while (input !== 'a' && input !== 'n');
  return input === 'a';
}