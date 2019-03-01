var add = require('../calc');

var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);
  });

  it('1 + 0 = 1', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});

describe('加法函数的动态测试', function() {
  var tests_normal = [
    {args: [0,          0], expected: 0},
    {args: [2,          3], expected: 5},
    {args: [-4,        -2], expected: -6},
    {args: [-4,        10], expected: 6},
    {args: [1,       1023], expected: 1024},
    {args: [2.6,      3.8], expected: 6.4},
    {args: ['2e2', '3e-2'], expected: 200.03}
  ];

  tests_normal.forEach(function(test) {
    it(`${test.args[0]} + ${test.args[1]} = ${test.expected}`, function() {
      expect(add(test.args[0], test.args[1])).to.be.equal(test.expected);
    });
  });

  var tests_ugily = [
    {args: ['a',      'b'], expected: NaN},
    {args: [2,        'a'], expected: NaN},
    {args: [',',        3], expected: NaN}
  ];

  tests_ugily.forEach(function(test) {
    it(`${test.args[0]} + ${test.args[1]} = ${test.expected}`, function() {
      expect(add(test.args[0], test.args[1])).to.be.NaN;
    });
  });
});
