export type Operation = 'ADD' | 'SUBTRACT' | 'MULTIPLY' | 'DIVISION';

export function sum(a: number, b: number): number {
  return a + b;
}

export function calculate(
  first: number,
  second: number,
  operation: Operation,
): number | null {
  if (isNaN(first) || isNaN(second)) {
    return null;
  }

  switch (operation) {
    case 'ADD':
      return first + second;
    case 'SUBTRACT':
      return first - second;
    case 'MULTIPLY':
      return first * second;
    case 'DIVISION':
      return first / second;
  }
}
