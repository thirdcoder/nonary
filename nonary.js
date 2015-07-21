'use strict';

//  ii -4   01 +1
//  i0 -3   1i +2
//  i1 -2   10 +3
//  0i -1   11 +4
//  00  0
var NONARY_TO_BTS = {
  // negative digits TODO: these are too wide in some fonts, alternatives? https://en.wikipedia.org/wiki/Numerals_in_Unicode
  z:'ii', m:'ii', '④':'ii', // U+2463 circled digit four
  y:'i0', k:'i0', '③':'i0', // U+2462 circled digit three
  x:'i1', j:'i1', '②':'i1', // U+2461 circled digit two
  w:'01', i:'0i', '①':'0i', // U+2460 circled digit one

  0:'00',

  // TODO: should we use different digits for nonary to disambiguate
  // nonary strings from balanced ternary? i01 could be nonary (for: 0i 00 01) or not..
  //  (nonary_cli interprets as both, if maybe_bts)
  a:'01', 1:'01',
  b:'1i', 2:'1i',
  c:'10', 3:'10',
  d:'11', 4:'11',
};

var BTS_TO_NONARY = {
  // prefer non-ambiguous nonary digits
  'ii': 'z',
  'i0': 'y',
  'i1': 'x',
  '0i': 'w',
  '00': '0',
  '01': 'a',
  '1i': 'b',
  '10': 'c',
  '11': 'd',
};

function nonary2bts(ns, sep) {
  if (sep === undefined) sep = '';

  var bt = '';
  for (var i = 0; i < ns.length; ++i) {
    var c = ns.charAt(i);

    var bt_c = NONARY_TO_BTS[c];
    if (!bt_c) throw new Error('nonary2bts('+ns+'): invalid nonary digit: '+c);

    bt += bt_c;
    if (i !== ns.length - 1) bt += sep;
  }

  return bt;
}

function bts2nonary(bt) {
  var i = bt.length;
  var ns = '';
  do {
    var c1 = bt.charAt(--i);
    var c2 = bt.charAt(--i);
    if (c2 === '') c2 = '0'; // if incomplete digit pair, charAt out of range

    var digit = BTS_TO_NONARY[c2 + c1];
    if (digit === undefined) throw new Error('bts2nonary('+bt+'): invalid balanced ternary digit pair: '+c2+c1);

    ns = digit + ns;
  } while(i > 0);

  return ns;
}

module.exports = {
  nonary2bts: nonary2bts,
  bts2nonary: bts2nonary,
};

