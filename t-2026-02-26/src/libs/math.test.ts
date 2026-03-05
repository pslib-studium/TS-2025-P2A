import { describe, it, expect } from 'vitest';
import { add, divide, factorial, Calculator } from './math';

// Testy pro základní funkce

describe('add', () => {
  it('sečte dvě kladná čísla', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('sečte záporná čísla', () => {
    expect(add(-2, -3)).toBe(-5);
  });
  it('sečte nulu', () => {
    expect(add(0, 5)).toBe(5);
  });
});

describe('divide', () => {
  it('správně dělí', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('vyhodí výjimku při dělení nulou', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});

describe('factorial', () => {
  it('faktoriál 0 je 1', () => {
    expect(factorial(0)).toBe(1);
  });
  it('faktoriál 5 je 120', () => {
    expect(factorial(5)).toBe(120);
  });
  it('vyhodí výjimku pro záporné číslo', () => {
    expect(() => factorial(-1)).toThrow('Negative input not allowed');
  });
  it('vyhodí výjimku pro necelé číslo', () => {
    expect(() => factorial(2.5)).toThrow('Input must be integer');
  });
});

// Testy pro třídu Calculator

describe('Calculator', () => {
  it('počáteční paměť je 0', () => {
    const calc = new Calculator();
    expect(calc.memory).toBe(0);
  });
  it('nastaví paměť', () => {
    const calc = new Calculator();
    calc.memory = 42;
    expect(calc.memory).toBe(42);
  });
  it('vyhodí výjimku při nastavení NaN', () => {
    const calc = new Calculator();
    expect(() => (calc.memory = NaN)).toThrow('Invalid value');
  });
  it('přičte k paměti', () => {
    const calc = new Calculator();
    calc.memory = 10;
    calc.addToMemory(5);
    expect(calc.memory).toBe(15);
  });
  it('vynuluje paměť', () => {
    const calc = new Calculator();
    calc.memory = 10;
    calc.clearMemory();
    expect(calc.memory).toBe(0);
  });
});
