function sum(a, b) {
  return a + b;
}
describe('Registration', () => {
  test('adds 1 + 2 to equal 4', () => {
    expect(sum(1, 2)).toBe(4);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
