import { describe, it, expect } from 'vitest';
import { askNumber } from './inputs';

describe('askNumber exists', () => {
  it('askNumber existuje', () => {
    expect(typeof askNumber).toBe('function');
  });
});
