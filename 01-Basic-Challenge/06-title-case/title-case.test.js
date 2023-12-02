const titleCase = require('./title-case.js');

test('Title Case', () => {
  expect(titleCase('hello world')).toBe('Hello World');
  expect(titleCase('hi there, how is it going?')).toBe('Hi There, How Is It Going?');
  expect(titleCase('i ran there. it was cold.')).toBe('I Ran There. It Was Cold.');
});