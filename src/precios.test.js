const { conIvaReducido } = require('./precios');

test('conIvaReducido suma el 10%', () => {
  expect(conIvaReducido(100)).toBe(110);
});