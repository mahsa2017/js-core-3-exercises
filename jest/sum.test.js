function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', function() {
  expect(sum(1, 2)).toBe(3);
  
});

test('adds 10 + -10 to equal 0', function() {
  expect(sum(10,-10)).toBe(0);
});