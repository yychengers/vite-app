const sum = require('../utils/sum');

// test('adds 1 + 2 to equal 3', {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('对象赋值', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });

  expect('team').not.toMatch(/T/);
});
