import { describe, it, expect, vi, beforeEach } from 'vitest';
import { askNumber, askString, askBoolean } from './inputs';
import readlineSync from 'readline-sync';

vi.mock('readline-sync');

describe('Input functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('askNumber', () => {
    it('askNumber existuje a je funkce', () => {
      expect(typeof askNumber).toBe('function');
    });

    it('vrací číslo v rozsahu', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('5');
      const result = askNumber('Zadej číslo', 1, 10);
      expect(result).toBe(5);
    });

    it('neopakuje se pro platné číslo v rozsahu', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('7');
      askNumber('Zadej číslo', 1, 10);
      expect(readlineSync.prompt).toHaveBeenCalledTimes(1);
    });

    it('opakuje se pro číslo mimo rozsah', () => {
      vi.mocked(readlineSync.prompt)
        .mockReturnValueOnce('15')
        .mockReturnValueOnce('5');
      const result = askNumber('Zadej číslo', 1, 10);
      expect(result).toBe(5);
      expect(readlineSync.prompt).toHaveBeenCalledTimes(2);
    });

    it('opakuje se pro NaN', () => {
      vi.mocked(readlineSync.prompt)
        .mockReturnValueOnce('abc')
        .mockReturnValueOnce('3');
      const result = askNumber('Zadej číslo', 1, 10);
      expect(result).toBe(3);
      expect(readlineSync.prompt).toHaveBeenCalledTimes(2);
    });
  });

  describe('askString', () => {
    it('askString existuje a je funkce', () => {
      expect(typeof askString).toBe('function');
    });

    it('vrací zadaný text', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('Ahoj');
      const result = askString('Zadej text');
      expect(result).toBe('Ahoj');
    });

    it('neopakuje se pro neprázdný text', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('Test');
      askString('Zadej text');
      expect(readlineSync.prompt).toHaveBeenCalledTimes(1);
    });

    it('opakuje se pro prázdný text', () => {
      vi.mocked(readlineSync.prompt)
        .mockReturnValueOnce('')
        .mockReturnValueOnce('Data');
      const result = askString('Zadej text');
      expect(result).toBe('Data');
      expect(readlineSync.prompt).toHaveBeenCalledTimes(2);
    });

    it('opakuje se pro text obsahující jen mezery', () => {
      vi.mocked(readlineSync.prompt)
        .mockReturnValueOnce('   ')
        .mockReturnValueOnce('Text');
      const result = askString('Zadej text');
      expect(result).toBe('Text');
      expect(readlineSync.prompt).toHaveBeenCalledTimes(2);
    });
  });

  describe('askBoolean', () => {
    it('askBoolean existuje a je funkce', () => {
      expect(typeof askBoolean).toBe('function');
    });

    it('vrací true pro "a"', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('a');
      const result = askBoolean('Chceš pokračovat');
      expect(result).toBe(true);
    });

    it('vrací false pro "n"', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('n');
      const result = askBoolean('Chceš pokračovat');
      expect(result).toBe(false);
    });

    it('přijímá velké písmeno "A"', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('A');
      const result = askBoolean('Chceš pokračovat');
      expect(result).toBe(true);
    });

    it('přijímá velké písmeno "N"', () => {
      vi.mocked(readlineSync.prompt).mockReturnValue('N');
      const result = askBoolean('Chceš pokračovat');
      expect(result).toBe(false);
    });

    it('opakuje se pro neplatný vstup', () => {
      vi.mocked(readlineSync.prompt)
        .mockReturnValueOnce('x')
        .mockReturnValueOnce('a');
      const result = askBoolean('Chceš pokračovat');
      expect(result).toBe(true);
      expect(readlineSync.prompt).toHaveBeenCalledTimes(2);
    });
  });
});
