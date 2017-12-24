'use strict';
const {sum} = require('./sum');

test('2 plus 2 should return 4', function(){
  expect(sum(2, 2)).toBe(4);
});

test('3 plus 5 should return 8', function(){
  expect(sum(3, 5)).toBe(8);
});

