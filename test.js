var test = require('tape');
var nonary2bts = require('./').nonary2bts;
var bts2nonary = require('./').bts2nonary;
var nonary2n = require('./').nonary2n;
var n2nonary = require('./').n2nonary;

test('nonary2bts', function(t) {
  t.equal(nonary2bts('0'), '00');
  t.equal(nonary2bts('a'), '01');
  t.equal(nonary2bts('b'), '1i');
  t.equal(nonary2bts('c'), '10');
  t.equal(nonary2bts('d'), '11');
  t.equal(nonary2bts('w'), '0i');
  t.equal(nonary2bts('x'), 'i1');
  t.equal(nonary2bts('y'), 'i0');
  t.equal(nonary2bts('z'), 'ii');

  t.equal(nonary2bts('zzzzz'), 'iiiiiiiiii');
  t.equal(nonary2bts('zzzdd'), 'iiiiii1111');
  t.equal(nonary2bts('zzz'), 'iiiiii');
  t.equal(nonary2bts('ddd'), '111111');

  t.equal(nonary2bts('4'), '11');
  t.equal(nonary2bts('40'), '1100');
  t.equal(nonary2bts('i'), '0i');
  t.equal(nonary2bts('m'), 'ii');
  t.equal(nonary2bts('④③②①jkm01234', '_'), 'ii_i0_i1_0i_i1_i0_ii_00_01_1i_10_11');
  t.end();
});

test('bts2nonary', function(t) {
  t.equal(bts2nonary('iiiiiiiiii'), 'zzzzz');
  t.equal(bts2nonary('iiiiii1111'), 'zzzdd');
  t.equal(bts2nonary('0'), '0');
  t.equal(bts2nonary('i'), 'w');
  t.equal(bts2nonary('10'), 'c');
  t.equal(bts2nonary('i1'), 'x');
  t.equal(bts2nonary('i110'), 'xc');
  t.equal(bts2nonary('1i110'), 'axc');
  t.end();
});

test('nonary2n', function(t) {
  t.equal(nonary2n('abcxyz'), 74165);
  t.equal(nonary2n('abcd0wxyz'), 54442256);
  t.equal(nonary2n('zzz'), -364);
  t.equal(nonary2n('add'), 121);
  t.equal(nonary2n('zz'), -40);
  t.equal(nonary2n('zzzzz'), -29524);
  t.end();
});

test('n2nonary', function(t) {
  t.equal(n2nonary(54442256), 'abcd0wxyz');
  t.equal(n2nonary(74165), 'abcxyz');
  t.equal(n2nonary(364), 'ddd');
  t.equal(n2nonary(-121), 'wzz');
  t.equal(n2nonary(-29524), 'zzzzz');
  t.equal(n2nonary(29524), 'ddddd');
  t.end();
});
