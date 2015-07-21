# nonary

Base 9, [nonary](https://en.wikipedia.org/wiki/Nonary), conversions, to/from balanced ternary (2-trit groups) and integers

Usage:

    var nonary2n = require('nonary').nonary2n;
    var n2nonary = require('nonary').n2nonary;
    var nonary2bts = require('nonary').nonary2bts;
    var bts2nonary = require('nonary').bts2nonary;

    n2nonary(-29524);   // 'zzzzz'
    nonary2n('zzzzz');  // -29524

    bts2nonary('iiiiii111100');   // 'zzzdd0'
    nonary2bts('zzzdd0');         // 'iiiiii111100'

Digit values 0, +1, +2, +3, +4, -1, -2, -3, and -4 correspond to nonary digits a, b, c, d, 0, w, x, y, and z,
and balanced ternary 00, 01, 1i, 10, 11, 0i, i1, i0, and ii.

Currently supports balanced nonary only (-4 to +4).

Analogous to [octal](https://en.wikipedia.org/wiki/Octal) (base 8) for binary, where each octal digit
represents 3 bits; each nonary (base 9) digit represents 2 trits. Compact representation for
[balanced-ternary](https://github.com/thirdcoder/balanced-ternary).
