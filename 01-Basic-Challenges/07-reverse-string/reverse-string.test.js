const reverseString = require('./reverse-string.js');

test('Reverse a String', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('Howdy')).toBe('ydwoH');
  expect(reverseString('1238532')).toBe('2358321');
  expect(reverseString('')).toBe('');
//   expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});