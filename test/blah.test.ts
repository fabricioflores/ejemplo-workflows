import { sum, multiply } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('multiply', () => {
  it('should mutiply two numbers', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
