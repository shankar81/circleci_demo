import { sum, calculate } from '../src/helper';

describe('Sum of two numbers', () => {
  it('Sum of 1 and 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('Sum of -10 and -10 should be -20', () => {
    expect(sum(-10, -10)).toBe(-20);
  });
});

describe('Calculate function', () => {
  it('Sum of 1 and 2 should be 3', () => {
    expect(calculate(1, 2, 'ADD')).toBe(3);
  });
  it('Sum of -10 and -10 should be -20', () => {
    expect(calculate(-10, -10, 'ADD')).toBe(-20);
  });
  it('Subtraction of 20 and 10 should be 10', () => {
    expect(calculate(20, 10, 'SUBTRACT')).toBe(10);
  });
  it('Multiplication of 10 and 50 should be 500', () => {
    expect(calculate(10, 50, 'MULTIPLY')).toBe(500);
  });
  it('Division of 121 and 11 should be 11', () => {
    expect(calculate(121, 11, 'DIVISION')).toBe(11);
  });
  it('If number is not passed + and 20 should be null', () => {
    expect(calculate(+'+', 20, 'DIVISION')).toBeNull();
  });
  it('If number is not passed + and / should be null', () => {
    expect(calculate(+'+', +'/', 'DIVISION')).toBeNull();
  });
});

export {};
