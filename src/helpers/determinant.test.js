import Determinant from './determinant';

let determinant2, determinant3, determinant4, determinant_special;

beforeEach(() => {

  determinant2 = new Determinant([
    [1, 2],
    [3, 1]
  ]);

  determinant3 = new Determinant([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
  ]);

  determinant4 = new Determinant([
    [1, 2, 3, 4],
    [4, 1, 2, 3],
    [3, 4, 1, 2],
    [2, 3, 4, 1]
  ]);

  determinant_special = new Determinant([
    [1, 2, 3, 4],
    [4, 1, 2/*0*/],
    [3, 4, 1/*0*/],
    [2, 3, 4, 1]
  ]);
});
// test determinant 2
it('determinant 2 calculateLeft should return correct', () => {
  expect(determinant2.calculateLeft()).toEqual(1);
});

it('determinant 2 calculateRight should return correct', () => {
  expect(determinant2.calculateRight()).toEqual(6);
});

it('determinant 2 calculate should return correct', () => {
  expect(determinant2.calculate()).toEqual(-5);
});

// test determinant 3
it('determinant 3 calculateLeft should return correct', () => {
  expect(determinant3.calculateLeft()).toEqual(36);
});

it('determinant 3 calculateRight should return correct', () => {
  expect(determinant3.calculateRight()).toEqual(18);
});

it('determinant 3 calculate should return correct', () => {
  expect(determinant3.calculate()).toEqual(18);
});

// test determinant 4
it('determinant 4 calculateLeft should return correct', () => {
  expect(determinant4.calculateLeft()).toEqual(354);
});

it('determinant 4 calculateRight should return correct', () => {
  expect(determinant4.calculateRight()).toEqual(146);
});

it('determinant 4 calculate should return correct', () => {
  expect(determinant4.calculate()).toEqual(208);
});

it('determinant_special calculateLeft should return correct', () => {
  expect(determinant_special.calculateLeft()).toEqual(257);
});
