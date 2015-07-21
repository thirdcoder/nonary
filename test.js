var test = require('tape');
var nonary2bts = require('./').nonary2bts;
var bts2nonary = require('./').bts2nonary;

test('nonary2bts', function(t) {
  t.equal(nonary2bts('4'), '11');
  t.equal(nonary2bts('40'), '1100');
  t.equal(nonary2bts('i'), '0i');
  t.equal(nonary2bts('m'), 'ii');
  t.equal(nonary2bts('④③②①jkm01234', '_'), 'ii_i0_i1_0i_i1_i0_ii_00_01_1i_10_11');
  t.end();
});

test('bts2nonary', function(t) {
  t.equal(bts2nonary('0'), '0');
  t.equal(bts2nonary('i'), 'w');
  t.equal(bts2nonary('10'), 'c');
  t.equal(bts2nonary('i1'), 'x');
  t.equal(bts2nonary('i110'), 'xc');
  t.equal(bts2nonary('1i110'), 'axc');
  t.end();
});
