#!/usr/bin/env node
var nonary2bts = require('./').nonary2bts;
var bts2nonary = require('./').bts2nonary;
var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;

// TODO: refactor with balanced-ternary module?
// if the string could possibly represent balanced ternary
function maybe_bts(s) {
  return !!s.match(/^[01i]+$/);
}

function maybe_nonary(s) {
  return !!s.match(/^[abcd0wxyz]+$/);
}

function maybe_n(s) {
  return !!s.match(/^[-+]?[0-9]+$/);
};

process.argv.slice(2).forEach(function(arg) {
  // ternary -> nonary -> decimal

  if (maybe_bts(arg)) {
    console.log(arg+' = '+bts2nonary(arg)+' = '+bts2n(arg));
  }

  if (maybe_nonary(arg)) {
    console.log(nonary2bts(arg)+' = '+arg+' = '+bts2n(nonary2bts(arg)));
  }

  if (maybe_n(arg)) {
    console.log(n2bts(arg)+' = '+bts2nonary(n2bts(arg))+' = '+arg);
  }
});

