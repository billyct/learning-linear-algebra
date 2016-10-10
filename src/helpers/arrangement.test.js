import InverseOrdinalNumbers from './arrangement';

// test arrangement 1
it('arrangement 1 inverseOrdinalNumbers should return correct', () => {
  const arrangement = new InverseOrdinalNumbers(12345);
  expect(arrangement.inverseOrdinalNumbers()).toEqual(0);
});

// test arrangement 2
it('arrangement 2 inverseOrdinalNumbers should return correct', () => {
  const arrangement = new InverseOrdinalNumbers(21542);
  expect(arrangement.inverseOrdinalNumbers()).toEqual(4);
});

// test arrangement 3
it('arrangement 3 (string) inverseOrdinalNumbers should return correct', () => {
  const arrangement = new InverseOrdinalNumbers('21542');
  expect(arrangement.inverseOrdinalNumbers()).toEqual(4);
});

// test arrangement 4
it('arrangement 4 (with alpha) inverseOrdinalNumbers should throw error', () => {
  const arrangement = new InverseOrdinalNumbers('21542x');
  expect(() => {
    arrangement.inverseOrdinalNumbers()
  }).toThrowError('error: only support digital');
});
