export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const substract = (a: number, b: number) => a - b;

export const multiply = (a: number, b: number) => a * b;
