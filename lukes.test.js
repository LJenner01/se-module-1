const lukeWork = require('./lukes.js');

test('adds 1 + 2 to equal 3', () => {
  expect(lukeWork(1, 2)).toBe(4);
});