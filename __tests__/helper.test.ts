import { sum } from '../src/helper';

describe('Sum of two numbers', () => {
  it('Sum of 1 and 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('Sum of -10 and -10 should be -20', () => {
    expect(sum(-10, -10)).toBe(-20);
  });
});

export {};
